/// <reference path="../d/client.d.ts" />
/// <reference path="./color.ts" />

import {customElement, noView, inject, bindable} from 'aurelia-framework';
import {Product} from './lib/types'

@customElement('product-canvas')
@noView
@inject(Element)
export class ProductCanvas {
  @bindable color: number;
  width: number = 200;
  height: number = 200;

  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private light: THREE.Light;
  private mesh: THREE.Mesh;

  constructor(elem: HTMLElement) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    elem.appendChild(this.canvas);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setClearColor(0, 0);

    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(3, 10, 5);

    this.scene = new THREE.Scene();
    this.scene.add(this.light);

    this.mesh = new THREE.Mesh(
        new THREE.BoxGeometry(10, 10, 10),
        new THREE.MeshPhongMaterial({
          ambient: 0xffffff,
          color: 0x9d9d9d,
          specular: 0x161616,
          shininess: 30,
          shading: THREE.FlatShading
        }));
    this.scene.add(this.mesh);

    this.resize();
  }
  resize() {
    this.renderer.setSize(this.width, this.height);

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.set(120, 100, 180);
    this.camera.up = new THREE.Vector3(0, 1, 0);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.render();
  }
  render() {
    //requestAnimationFrame(() => this.renderer.render(this.scene, this.camera));
    this.renderer.render(this.scene, this.camera);
  }
  colorChanged(val) {
    this.render();
  }
}
