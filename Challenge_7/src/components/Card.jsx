import React from 'react';
import IconUser from '../images/users.png'
import IconSetting from '../images/setting.png'
import IconCalender from '../images/calender.png'
import '../style/style.css'

const Card = (props) => {
  return (
    <>
      <div class="gambarMobil">
        <img src={props.image} />
      </div>
      <p>{props.manufacture} - {props.model}</p>
      <p class="hargaPerHari">Rp {props.rentPerDay} / hari</p>
      <p>{props.description}</p>
      <div class="orang">
        <img src={IconUser} />
        <p>{props.capacity}</p>
      </div>
      <div class="setting">
        <img src={IconSetting} />
        <p>{props.transmission}</p>
      </div>
      <div class="tahun">
        <img src={IconCalender} />
        <p>{props.year}</p>
      </div>
      <button class="btn btn-pilihMobil">Pilih Mobil</button>
    </>
  );
}

export default Card;
