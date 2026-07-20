'use client';
import Image from "next/image";
import TriangleLeftFillIcon from '@iconify-react/gravity-ui/triangle-left-fill';
import {animate, createScope} from "animejs";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const root = useRef(null);
  const laucherRef = useRef(null);

  const scaleLauncher = () => {
    const scaleX = window.innerWidth / 1980;
    const scaleY = window.innerHeight / 1080;
    const scale = Math.min(scaleX, scaleY);
    const launcher = document.querySelector(".laucher");
    launcher.style.transform = `scale(${scale})`;  
  }

  useEffect(() => {
    laucherRef.current = createScope({root}).add(self => { 
      /*TODO - Fazer o scalelaucjer funcionar aq dentro*/
    });
  }, []);

  return (
    <div ref={root} className="springkle">   
      <div className="cards-section">
        <div className="y-div-start">
          <div className="card-1">
            <div className="empty-space"></div>          
          </div>
          <div className="card-2">
            <div className="divisa-middle-card"></div>
            <div className="indicator">
              <TriangleLeftFillIcon height="1.2em" />
            </div>          
          </div>
          <div className="card-3">
            <div className="empty-space"></div>    
          </div>
        </div>
      </div>
      <div>
          <div className="y-div-end">
            <div className="card-image other-card"></div>
            <div className="card-image other-card"></div>
            <div className="card-image other-card"></div>
            <div className="card-image other-card"></div>
            <div className="card-image middle-card"></div>
            <div className="card-image other-card"></div>
            <div className="card-image other-card"></div>
            <div className="card-image other-card"></div>
            <div className="card-image other-card"></div>
          </div>
      </div>
      <div className="games-section">
        <div className="game-info">
          <div className="game-name">Zelda Ocarina of Time</div>
          <div className="game-playtime">
            <span>Playtime:</span> <span className="game-playtime-value">120h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
