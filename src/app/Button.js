import Image from "next/image";
import './Button.style.css'

function Forword() {
  return (
    <>
        <Image
          src="/forword.png"
          width={50}
          height={50}
          alt="forword"
          className="forword"
        ></Image>
    </>
  );
}
 
function Backword() {
    return(
        <>
        <Image
          src="/backword.png"
          width={50}
          height={50}
          alt="backword"
          className="backword"
        ></Image>
        </>
    )
}

export {Backword}
export default Forword;
