import * as THREE from 'three';

export function BG() {
    // Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);

    renderer.render(scene, camera);

    // Torus

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    function addStar() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3)
            .fill()
            .map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        scene.add(star);
    }

    Array(100).fill().forEach(addStar);

    // Background
    const spaceTexture = new THREE.CubeTextureLoader()
        .setPath('/cubemap/')
        .load([
            'right.png', 'left.png',
            'top.png', 'bottom.png',
            'front.png', 'back.png'
        ])
    scene.background = spaceTexture;


    // Scroll Animation

    function moveCamera() {
        const t = document.body.getBoundingClientRect().top;

        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.rotation.x = t * 0.0002;
        camera.rotation.z = t * 0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    // Update Size

    window.onresize = function () {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    };

    // Animation Loop

    function animate() {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;

        // controls.update();

        renderer.render(scene, camera);
    }

    animate();
}