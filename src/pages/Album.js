import React from 'react';
import { useAlbum } from '../hooks/useAlbum';
import "./Album.css";
import { useLocation } from 'react-router-dom';
import OpenSea from '../images/opensea.png';
import { ClockCircleOutlined } from '@ant-design/icons';

const Album = ({setNftAlbum}) => {
  // const { state: albumDetails } = useLocation();
  const { album } = useAlbum(albumDetails.contract);
  const albumDetails = [
    {
      "token_address": "",
      "token_id": "",
      "amount": "1",
      "contract_type": "ERC1155",
      "name": "Shaadow",
      "symbol": "shad",
      "token_uri": "",
      "metadata": "{\"image\":\"\",\"name\":\"Head Shoulder\",\"animation_url\":\"\"}",
      "synced_at": ""
    }
  ]
  return (
    <>
      <div className="albumContent">
        <div className="topBan">
          <img
            src={albumDetails.image}
            alt="albumcover"
            className="albumCover"/>
          <div className="albumDeets">
            <div>ALBUM</div>
            <div className="title">{albumDetails.title}</div>
            <div className="artist">
              {album && JSON.parse(album[0].metadata).artist}
            </div>
            <div className="artist">
              {album && JSON.parse(album[0].metadata).year}
              {album && album.length} Songs
            </div>
          </div>
        </div>
        <div className="topBan">
          <div className="playButton" onClick={(() => setNftAlbum(album))}>
            Play
          </div>
          <div
           className="openButton"
           onClick={() => {
             window.open(
               `https://testnets.opensea.io/assets/mumbai/${albumDetails.contract}/1`
             )
           }}
          >
            OpenSea
            <img src={OpenSea} className="openLogo" />
          </div>
        </div>
        <div className="tableHeader">
          <div className="numberHeader">#</div>
          <div className="titleHeader">TITLE</div>
          <div className="numberHeader">
            <ClockCircleOutlined />
          </div>
          {albumDetails &&
            albumDetails.map((nft, i) => {
              nft = JSON.parse(nft.metadata)
              return (
                <>
                  <div className="tableContent">
                    <div className="numberHeader">{i + 1}</div>
                    <div className="titleHeader"
                      style={{ color: "rgb(205, 203, 203)" }}
                    >
                      {nft.name}
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      {/* <button onClick={() => { console.log(album) }}>Hello</button> */}
    </>
  )
}

export default Album;
