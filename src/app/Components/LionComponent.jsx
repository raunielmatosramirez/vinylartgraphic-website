"use client";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import NavBarCuadrado from "./NavBarCuadrado";
import Image from "next/image";

// Componente del León
function LionModel(props) {
  const { nodes, materials } = useGLTF("/lion-web.gltf");
  const groupRef = useRef();
  useGLTF.preload("/lion-web.gltf");

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = props.rotationY || 0;
      groupRef.current.rotation.x = props.rotationX || 0;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-2.526, 14.295, -1.803]}>
        <mesh
          geometry={nodes.OREJA_I_1.geometry}
          material={materials["default"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_negro"].geometry}
          material={materials["M negro"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_negro_1"].geometry}
          material={materials["M negro"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_magenta"].geometry}
          material={materials["M magenta"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_negro_2"].geometry}
          material={materials["M negro"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_magenta_1"].geometry}
          material={materials["M magenta"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_negro_3"].geometry}
          material={materials["M negro"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_amarillo"].geometry}
          material={materials["M amarillo"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_cian"].geometry}
          material={materials["M cian"]}
        />
        <mesh
          geometry={nodes["OREJA_I-M_magenta_2"].geometry}
          material={materials["M magenta"]}
        />
      </group>
      <group position={[2.515, 14.295, -1.803]}>
        <mesh
          geometry={nodes.OREJA_D_1.geometry}
          material={materials["default"]}
        />
        <mesh
          geometry={nodes["OREJA_D-Mat20"].geometry}
          material={materials["Mat.20"]}
        />
        <mesh
          geometry={nodes["OREJA_D-Mat20_1"].geometry}
          material={materials["Mat.20"]}
        />
        <mesh
          geometry={nodes["OREJA_D-M_cian"].geometry}
          material={materials["M cian"]}
        />
        <mesh
          geometry={nodes["OREJA_D-M_magenta"].geometry}
          material={materials["M magenta"]}
        />
      </group>
      <group position={[-3.16, 15.974, -3.038]} rotation={[2.7, 0.291, 2.596]}>
        <mesh
          geometry={nodes["Cube18-acrilico3"].geometry}
          material={materials["acrilico.3"]}
        />
        <mesh
          geometry={nodes["Cube18-Mat16"].geometry}
          material={materials["Mat.16"]}
        />
      </group>
      <group
        position={[-3.267, 7.244, -3.091]}
        rotation={[-2.754, 0.361, 0.714]}
      >
        <mesh
          geometry={nodes["Cube20-acrilico5"].geometry}
          material={materials["acrilico.5"]}
        />
        <mesh
          geometry={nodes["Cube20-Mat16"].geometry}
          material={materials["Mat.16"]}
        />
      </group>
      <group
        position={[-5.009, 11.202, -2.799]}
        rotation={[-3.076, 0.519, 1.469]}
      >
        <mesh
          geometry={nodes["Cube24-acrilico1"].geometry}
          material={materials["acrilico.1"]}
        />
        <mesh
          geometry={nodes["Cube24-Mat16"].geometry}
          material={materials["Mat.16"]}
        />
      </group>
      <group position={[0.493, 5.416, -1.778]} rotation={[0.389, 1.296, 2.816]}>
        <mesh
          geometry={nodes["Cube30-acrilico5"].geometry}
          material={materials["acrilico.5"]}
        />
        <mesh
          geometry={nodes["Cube30-Mat20"].geometry}
          material={materials["Mat.20"]}
        />
      </group>
      <group position={[1.261, 10.858, -0.531]}>
        <mesh
          geometry={nodes["cara-Mat16"].geometry}
          material={materials["Mat.16"]}
        />
        <mesh
          geometry={nodes["cara-acrilico6"].geometry}
          material={materials["acrilico.6"]}
        />
        <mesh
          geometry={nodes["cara-Mat20"].geometry}
          material={materials["Mat.20"]}
        />
        <mesh
          geometry={nodes["cara-acrilico4"].geometry}
          material={materials["acrilico.4"]}
        />
        <mesh
          geometry={nodes["cara-acrilico6_1"].geometry}
          material={materials["acrilico.6"]}
        />
        <mesh
          geometry={nodes["cara-acrilico5"].geometry}
          material={materials["acrilico.5"]}
        />
        <mesh
          geometry={nodes["cara-Mat16_1"].geometry}
          material={materials["Mat.16"]}
        />
        <mesh
          geometry={nodes["cara-Mat19"].geometry}
          material={materials["Mat.19"]}
        />
        <mesh
          geometry={nodes["cara-acrilico8"].geometry}
          material={materials["acrilico.8"]}
        />
        <mesh
          geometry={nodes["cara-acrilico6_2"].geometry}
          material={materials["acrilico.6"]}
        />
        <mesh
          geometry={nodes["cara-acrilico11"].geometry}
          material={materials["acrilico.11"]}
        />
        <mesh
          geometry={nodes["cara-acrilico9"].geometry}
          material={materials["acrilico.9"]}
        />
        <mesh
          geometry={nodes["cara-acrilico12"].geometry}
          material={materials["acrilico.12"]}
        />
        <mesh
          geometry={nodes["cara-Mat16_2"].geometry}
          material={materials["Mat.16"]}
        />
        <mesh
          geometry={nodes["cara-nariz"].geometry}
          material={materials.nariz}
        />
        <mesh
          geometry={nodes["cara-Mat20_1"].geometry}
          material={materials["Mat.20"]}
        />
        <mesh
          geometry={nodes["cara-Mat4"].geometry}
          material={materials["Mat.4"]}
        />
        <mesh geometry={nodes["cara-Mat"].geometry} material={materials.Mat} />
        <mesh
          geometry={nodes["cara-Mat8"].geometry}
          material={materials["Mat.8"]}
        />
        <mesh
          geometry={nodes["cara-Mat6"].geometry}
          material={materials["Mat.6"]}
        />
        <mesh
          geometry={nodes["cara-Mat5"].geometry}
          material={materials["Mat.5"]}
        />
        <mesh
          geometry={nodes["cara-Mat9"].geometry}
          material={materials["Mat.9"]}
        />
        <mesh
          geometry={nodes["cara-Mat8_1"].geometry}
          material={materials["Mat.8"]}
        />
        <mesh
          geometry={nodes["cara-Mat_1"].geometry}
          material={materials.Mat}
        />
        <mesh
          geometry={nodes["cara-Mat11"].geometry}
          material={materials["Mat.11"]}
        />
        <mesh
          geometry={nodes["cara-Mat10"].geometry}
          material={materials["Mat.10"]}
        />
        <mesh
          geometry={nodes["cara-Mat5_1"].geometry}
          material={materials["Mat.5"]}
        />
        <mesh
          geometry={nodes["cara-Mat4_1"].geometry}
          material={materials["Mat.4"]}
        />
        <mesh
          geometry={nodes["cara-Mat2"].geometry}
          material={materials["Mat.2"]}
        />
        <mesh
          geometry={nodes["cara-Mat2_1"].geometry}
          material={materials["Mat.2"]}
        />
        <mesh
          geometry={nodes["cara-Mat2_2"].geometry}
          material={materials["Mat.2"]}
        />
        <mesh
          geometry={nodes["cara-Mat4_2"].geometry}
          material={materials["Mat.4"]}
        />
        <mesh
          geometry={nodes["cara-Mat3"].geometry}
          material={materials["Mat.3"]}
        />
        <mesh
          geometry={nodes["cara-Mat3_1"].geometry}
          material={materials["Mat.3"]}
        />
        <mesh
          geometry={nodes["cara-Mat4_3"].geometry}
          material={materials["Mat.4"]}
        />
        <mesh
          geometry={nodes["cara-Mat5_2"].geometry}
          material={materials["Mat.5"]}
        />
        <mesh
          geometry={nodes["cara-Mat6_1"].geometry}
          material={materials["Mat.6"]}
        />
        <mesh
          geometry={nodes["cara-Mat7"].geometry}
          material={materials["Mat.7"]}
        />
        <mesh
          geometry={nodes["cara-Mat8_2"].geometry}
          material={materials["Mat.8"]}
        />
        <mesh
          geometry={nodes["cara-Mat9_1"].geometry}
          material={materials["Mat.9"]}
        />
        <mesh
          geometry={nodes["cara-Mat10_1"].geometry}
          material={materials["Mat.10"]}
        />
        <mesh
          geometry={nodes["cara-Mat13"].geometry}
          material={materials["Mat.13"]}
        />
        <mesh
          geometry={nodes["cara-Mat11_1"].geometry}
          material={materials["Mat.11"]}
        />
        <mesh
          geometry={nodes["cara-Mat12"].geometry}
          material={materials["Mat.12"]}
        />
        <mesh
          geometry={nodes["cara-Mat14"].geometry}
          material={materials["Mat.14"]}
        />
        <mesh
          geometry={nodes["cara-Mat15"].geometry}
          material={materials["Mat.15"]}
        />
        <mesh
          geometry={nodes["cara-Mat_2"].geometry}
          material={materials.Mat}
        />
        <mesh
          geometry={nodes["cara-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <mesh
        geometry={nodes.OJO_D.geometry}
        material={materials["OJO D"]}
        position={[1.155, 12.384, 0.891]}
      />
      <mesh
        geometry={nodes.OJO_I.geometry}
        material={materials["OJO I"]}
        position={[-1.166, 12.384, 0.889]}
      />
      <mesh
        geometry={nodes.Cube3.geometry}
        material={materials.acrilico}
        position={[-0.955, 16.037, -2.002]}
        rotation={[2.973, 0.045, 2.884]}
      />
      <mesh
        geometry={nodes.Cube4.geometry}
        material={materials["acrilico.6"]}
        position={[-1.863, 15.42, -1.951]}
        rotation={[2.983, 0.073, 2.711]}
      />
      <mesh
        geometry={nodes.Cube5.geometry}
        material={materials["acrilico.11"]}
        position={[-3.596, 14.384, -1.988]}
        rotation={[3.041, 0.143, 2.276]}
      />
      <mesh
        geometry={nodes.Cube7.geometry}
        material={materials["acrilico.7"]}
        position={[-4.439, 12.424, -1.977]}
        rotation={[Math.PI, 0.175, 1.707]}
      />
      <mesh
        geometry={nodes.Cube8.geometry}
        material={materials["acrilico.8"]}
        position={[-4.405, 11.233, -1.975]}
        rotation={[-3.111, 0.172, 1.481]}
      />
      <mesh
        geometry={nodes.Cube9.geometry}
        material={materials.acrilico}
        position={[-3.622, 9.111, -1.989]}
        rotation={[-3.041, 0.143, 0.953]}
      />
      <mesh
        geometry={nodes.Cube10.geometry}
        material={materials.acrilico}
        position={[-2.053, 7.558, -2.004]}
        rotation={[-2.998, 0.1, 0.55]}
      />
      <mesh
        geometry={nodes.Cube11.geometry}
        material={materials.DORADO}
        position={[-0.049, 6.769, -1.989]}
        rotation={[-2.967, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube12.geometry}
        material={materials["acrilico.5"]}
        position={[-0.989, 6.989, -2.009]}
        rotation={[-2.977, 0.059, 0.344]}
      />
      <mesh
        geometry={nodes.Cube13.geometry}
        material={materials["acrilico.2"]}
        position={[-3.061, 8.042, -2.032]}
        rotation={[-3.018, 0.123, 0.778]}
      />
      <mesh
        geometry={nodes.Cube14.geometry}
        material={materials["acrilico.5"]}
        position={[-4.152, 10.138, -1.976]}
        rotation={[-3.067, 0.158, 1.2]}
      />
      <mesh
        geometry={nodes.Cube15.geometry}
        material={materials["acrilico.12"]}
        position={[-2.84, 15.03, -1.989]}
        rotation={[2.998, 0.1, 2.538]}
      />
      <mesh
        geometry={nodes.Cube16.geometry}
        material={materials["acrilico.11"]}
        position={[-4.146, 13.451, -1.967]}
        rotation={[3.081, 0.164, 2.043]}
      />
      <mesh
        geometry={nodes.Cube6.geometry}
        material={materials.DORADO}
        position={[-0.01, 4.875, -1.509]}
        rotation={[-Math.PI, 1.571, 0]}
      />
      <mesh
        geometry={nodes.Cube21.geometry}
        material={materials["acrilico.4"]}
        position={[1.048, 6.967, -2.023]}
        rotation={[-2.977, 0.059, 0.344]}
      />
      <mesh
        geometry={nodes.Cube17.geometry}
        material={materials["acrilico.4"]}
        position={[-4.846, 14.003, -3.032]}
        rotation={[2.906, 0.471, 2.099]}
      />
      <mesh
        geometry={nodes.Cube19.geometry}
        material={materials["acrilico.1"]}
        position={[-4.841, 9.767, -2.767]}
        rotation={[-2.927, 0.481, 1.155]}
      />
      <mesh
        geometry={nodes.Cube21_1.geometry}
        material={materials["acrilico.1"]}
        position={[-0.833, 5.472, -2.449]}
        rotation={[2.103, -0.199, -3.026]}
      />
      <mesh
        geometry={nodes.Cube22.geometry}
        material={materials["acrilico.12"]}
        position={[-2.093, 6.388, -3.129]}
        rotation={[-2.69, 0.275, 0.492]}
      />
      <mesh
        geometry={nodes.Cube23.geometry}
        material={materials["acrilico.4"]}
        position={[-4.378, 8.297, -3.458]}
        rotation={[-2.822, 0.422, 0.891]}
      />
      <mesh
        geometry={nodes.Cube25.geometry}
        material={materials.DORADO}
        position={[-5.091, 12.684, -2.97]}
        rotation={[3.088, 0.52, 1.725]}
      />
      <mesh
        geometry={nodes.Cube26.geometry}
        material={materials["acrilico.9"]}
        position={[-4.437, 15.451, -3.543]}
        rotation={[2.797, 0.402, 2.342]}
      />
      <mesh
        geometry={nodes.Cube27.geometry}
        material={materials["acrilico.10"]}
        position={[-2.134, 16.88, -3.144]}
        rotation={[2.66, 0.213, 2.758]}
      />
      <mesh
        geometry={nodes.Cube28.geometry}
        material={materials["acrilico.4"]}
        position={[-0.585, 17.198, -3.027]}
        rotation={[2.633, 0.13, 2.977]}
      />
      <mesh
        geometry={nodes.Cube29.geometry}
        material={materials["acrilico.1"]}
        position={[-0.48, 5.265, -1.749]}
        rotation={[-2.891, 1.211, -0.235]}
      />
      <mesh
        geometry={nodes.Cube31.geometry}
        material={materials["acrilico.2"]}
        position={[-1.88, 6.86, -1.688]}
        rotation={[-2.883, 0.852, -0.227]}
      />
      <mesh
        geometry={nodes.Cube45.geometry}
        material={materials.DORADO}
        position={[-4.68, 10.078, -4.52]}
        rotation={[2.886, -0.659, 1.199]}
      />
      <mesh
        geometry={nodes.Cube46.geometry}
        material={materials["acrilico.11"]}
        position={[-3.717, 8.222, -4.514]}
        rotation={[2.671, -0.572, -1.202]}
      />
      <mesh
        geometry={nodes.Cube47.geometry}
        material={materials["Mat.4"]}
        position={[-4.129, 13.855, -4.41]}
        rotation={[-2.674, -0.657, 2.278]}
      />
      <mesh
        geometry={nodes.Cube48.geometry}
        material={materials["Mat.10"]}
        position={[-2.224, 15.885, -4.427]}
        rotation={[-2.455, -0.418, 2.682]}
      />
      <mesh
        geometry={nodes.Cube49.geometry}
        material={materials.DORADO}
        position={[-0.146, 17.307, -4.3]}
        rotation={[-2.445, -0.198, 3.113]}
      />
      <mesh
        geometry={nodes.Cube50.geometry}
        material={materials["Mat.10"]}
        position={[-1.245, 17.003, -4.445]}
        rotation={[-2.216, -0.306, 2.907]}
      />
      <mesh
        geometry={nodes.Cube51.geometry}
        material={materials["Mat.10"]}
        position={[-3.379, 15.044, -4.295]}
        rotation={[-2.441, -0.572, 2.57]}
      />
      <mesh
        geometry={nodes.Cube52.geometry}
        material={materials["Mat.4"]}
        position={[-4.486, 12.73, -4.522]}
        rotation={[-2.867, -0.657, -1.352]}
      />
      <mesh
        geometry={nodes.Cube53.geometry}
        material={materials.DORADO}
        position={[-4.865, 11.442, -4.459]}
        rotation={[-2.99, -0.741, -1.167]}
      />
      <mesh
        geometry={nodes.Cube54.geometry}
        material={materials.Mat}
        position={[-4.474, 8.782, -4.302]}
        rotation={[1.396, -1.043, -0.137]}
      />
      <mesh
        geometry={nodes.Cube55.geometry}
        material={materials["acrilico.11"]}
        position={[-2.77, 7.319, -4.499]}
        rotation={[2.572, -0.45, -1.281]}
      />
      <mesh
        geometry={nodes.Cube56.geometry}
        material={materials["acrilico.11"]}
        position={[-1.686, 6.468, -4.181]}
        rotation={[0.174, -0.013, 3.067]}
      />
      <mesh
        geometry={nodes.Cube57.geometry}
        material={materials.DORADO}
        position={[-0.386, 6.17, -4.475]}
        rotation={[-2.358, -0.045, -0.001]}
      />
      <mesh
        geometry={nodes.Cube58.geometry}
        material={materials["acrilico.13"]}
        position={[1.018, 6.612, -4.496]}
        rotation={[-2.286, -0.2, -0.171]}
      />
      <mesh
        geometry={nodes.Cube59.geometry}
        material={materials.acrilico}
        position={[2.996, 7.743, -4.632]}
        rotation={[-2.317, -0.563, -0.44]}
      />
      <mesh
        geometry={nodes.Cube60.geometry}
        material={materials.acrilico}
        position={[4.401, 9.61, -4.514]}
        rotation={[-2.815, -0.823, -1.108]}
      />
      <mesh
        geometry={nodes.Cube61.geometry}
        material={materials["acrilico.13"]}
        position={[4.456, 11.012, -4.614]}
        rotation={[-3.035, -0.955, -1.422]}
      />
      <mesh
        geometry={nodes.Cube62.geometry}
        material={materials["acrilico.13"]}
        position={[4.142, 13.558, -4.529]}
        rotation={[2.675, -0.767, -2.198]}
      />
      <mesh
        geometry={nodes.Cube63.geometry}
        material={materials["acrilico.13"]}
        position={[2.791, 15.959, -5.018]}
        rotation={[2.42, -0.543, -2.623]}
      />
      <mesh
        geometry={nodes.Cube64.geometry}
        material={materials["acrilico.10"]}
        position={[1.437, 17.214, -4.576]}
        rotation={[-2.702, 0.087, 0.366]}
      />
      <mesh
        geometry={nodes.Cube65.geometry}
        material={materials["acrilico.13"]}
        position={[3.467, 14.771, -4.529]}
        rotation={[2.542, -0.678, -2.399]}
      />
      <mesh
        geometry={nodes.Cube66.geometry}
        material={materials.acrilico}
        position={[4.539, 12.27, -4.513]}
        rotation={[2.907, -0.848, -1.863]}
      />
      <mesh
        geometry={nodes.Cube67.geometry}
        material={materials["acrilico.13"]}
        position={[2.147, 7.088, -4.529]}
        rotation={[-2.318, -0.33, -0.291]}
      />
      <mesh
        geometry={nodes.Cube68.geometry}
        material={materials["acrilico.13"]}
        position={[3.897, 8.576, -4.501]}
        rotation={[-2.535, -0.671, -0.703]}
      />
      <mesh
        geometry={nodes.Cube69.geometry}
        material={materials.DORADO}
        position={[-0.755, 5.408, -3.185]}
        rotation={[-2.69, 0.275, 0.317]}
      />
      <mesh
        geometry={nodes.Cube70.geometry}
        material={materials.acrilico}
        position={[0.684, 5.402, -3.213]}
        rotation={[2.167, 0.472, -0.31]}
      />
      <mesh
        geometry={nodes.polySurface3075pCylinder665.geometry}
        material={materials["METAL GRIS OSCURO"]}
        position={[-1.159, 4.435, -1.376]}
        rotation={[0, 1.134, Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.pCylinder665polySurface3074.geometry}
        material={materials["Mat.5"]}
        position={[-1.046, 5.52, -1.385]}
        rotation={[0, 1.134, Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.pCylinder665polySurface3073.geometry}
        material={materials["METAL GRIS OSCURO"]}
        position={[-1.164, 5.336, -1.375]}
        rotation={[0, 1.134, Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.pCylinder665polySurface3071.geometry}
        material={materials["Mat.2"]}
        position={[-1.183, 6.125, -1.301]}
        rotation={[0, 1.134, Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.pCylinder665polySurface3072.geometry}
        material={materials["Mat.2"]}
        position={[-1.131, 5.756, -1.36]}
        rotation={[0, 1.134, Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.polySurface3075pCylinder665_1.geometry}
        material={materials["METAL GRIS OSCURO"]}
        position={[1.162, 4.176, -1.362]}
        rotation={[-Math.PI, 1.134, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.pCylinder665polySurface3074_1.geometry}
        material={materials["Mat.5"]}
        position={[1.049, 5.52, -1.37]}
        rotation={[-Math.PI, 1.134, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.pCylinder665polySurface3073_1.geometry}
        material={materials["METAL GRIS OSCURO"]}
        position={[1.167, 5.336, -1.361]}
        rotation={[-Math.PI, 1.134, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.pCylinder665polySurface3071_1.geometry}
        material={materials["Mat.2"]}
        position={[1.186, 6.125, -1.287]}
        rotation={[-Math.PI, 1.134, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.pCylinder665polySurface3072_1.geometry}
        material={materials["Mat.2"]}
        position={[1.134, 5.756, -1.345]}
        rotation={[-Math.PI, 1.134, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.cara_reticula.geometry}
        material={materials["Mat.18"]}
        position={[0.074, 11.361, 0.892]}
      />
      <mesh
        geometry={nodes.OREJA_I_reticula.geometry}
        material={materials["Mat.18"]}
        position={[-2.526, 14.295, -1.803]}
      />
      <mesh
        geometry={nodes.OREJA_D_reticula.geometry}
        material={materials["Mat.18"]}
        position={[2.515, 14.295, -1.803]}
      />
    </group>
  );
}

function LionController({ isMouseInViewport, mousePosition }) {
  const lionRef = useRef();
  const rotationY = useRef(0);
  const rotationX = useRef(0);
  const returnToCenter = useRef(false);
  const lastMouseInViewport = useRef(true);

  useFrame(() => {
    if (!lionRef.current) return;

    if (!isMouseInViewport && lastMouseInViewport.current) {
      returnToCenter.current = true;
    }

    if (isMouseInViewport && !lastMouseInViewport.current) {
      returnToCenter.current = false;
    }
    lastMouseInViewport.current = isMouseInViewport;

    if (returnToCenter.current) {
      rotationY.current += (0 - rotationY.current) * 0.15;
      rotationX.current += (0 - rotationX.current) * 0.15;
      if (
        Math.abs(rotationY.current) < 0.001 &&
        Math.abs(rotationX.current) < 0.001
      ) {
        rotationY.current = 0;
        rotationX.current = 0;
        returnToCenter.current = false;
      }
    } else if (isMouseInViewport && mousePosition) {
      const normalizedX = (mousePosition.x / window.innerWidth) * 2 - 1;
      const normalizedY = 1 - (mousePosition.y / window.innerHeight) * 2;

      rotationY.current = normalizedX * Math.PI * 0.2;
      rotationX.current = normalizedY * Math.PI * -0.15;
    }

    lionRef.current.rotation.y = rotationY.current;
    lionRef.current.rotation.x = rotationX.current;
  });

  return <LionModel ref={lionRef} scale={4} position={[0, -40, 0]} />;
}

export default function LionComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInViewport, setIsMouseInViewport] = useState(true);
  const [zoom, setZoom] = useState(9);

  // Usar throttling para optimizar el mousemove
  const throttledSetMousePosition = useRef(null);

  useEffect(() => {
    let lastCall = 0;
    const throttleDelay = 16; // ~60fps

    throttledSetMousePosition.current = (position) => {
      const now = Date.now();
      if (now - lastCall < throttleDelay) return;

      lastCall = now;
      setMousePosition(position);
    };
  }, []);

  const updateZoom = () => {
    const screenWidth = window.innerWidth;
    const breakpoints = {
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
    };

    if (screenWidth < breakpoints.laptop) {
      setZoom(9);
    } else {
      setZoom(11);
    }
  };

  useEffect(() => {
    updateZoom();
    window.addEventListener("resize", updateZoom);

    return () => {
      window.removeEventListener("resize", updateZoom);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (throttledSetMousePosition.current) {
        throttledSetMousePosition.current({ x: e.clientX, y: e.clientY });
      }
      setIsMouseInViewport(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInViewport(false);
    };

    const handleMouseEnter = () => {
      setIsMouseInViewport(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "95%",
          zIndex: 1,
          pointerEvents: "auto",
        }}
        onMouseEnter={() => setIsMouseInViewport(true)}
        onMouseLeave={() => setIsMouseInViewport(false)}
      >
        <div
          style={{
            pointerEvents: "auto",
            width: "100%",
          }}
        >
          <NavBarCuadrado />
        </div>
      </div>
      <section
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          padding: 0,
        }}
      >
        <Canvas
          camera={{ zoom: zoom, position: [0, -10, 550] }}
          style={{
            position: "relative",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <directionalLight position={[1, 1500, 1240]} intensity={10} />
          <Suspense fallback={null}>
            <LionController
              isMouseInViewport={isMouseInViewport}
              mousePosition={mousePosition}
            />
          </Suspense>
        </Canvas>
        <div className='absolute font-bold bottom-4 left-1/2 mt-[-10px] z-5 transform -translate-x-1/2 text-center text-white text-[48px] w-full'>
          <div className='w-full h-full flex justify-center items-center'>
            <Image
              src='/HOMEGRAPHICDESIGN.svg'
              width={450}
              priority={true}
              height={160}
              alt='Diseño gráfico principal'
              className='max-w-full h-auto'
            />
          </div>
          <div className='relative mt-4 w-full flex bg-opacity-100 justify-center'>
            <Image
              src='./HOMEScrolltofindmore .svg'
              width={150}
              height={30}
              alt='Scroll to find more'
            />
          </div>
        </div>
      </section>
    </>
  );
}
