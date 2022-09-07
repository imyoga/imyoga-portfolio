import {useState} from "react";
import { MdNightlight } from 'react-icons/md';
import '../styles/LightMode.css';

const LightMode = (props) => {

  const [light, setLight] = useState(false);

  props.func(light);


  return (
    <div className="container-light-mode" onClick={()=>setLight(!light)}>
      <MdNightlight className="icon-light-mode" />
    </div>
  );
};

export default LightMode;
