
// import "./Home.module.css"

import styles from "./Home.module.css"
// import imgLogo from "./assets/images/zapas.png"

export const Home = () => {

  const sumar = ()=>{
    return 2 + 2
  }

  let edad = 21

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Este el home</h1>
      <h3>{edad}</h3>
      {/* <img src={imgLogo} alt="" /> */}
      <img src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1686700084/images_uj3lxk.jpg" alt="" />
    </div>
  )
}
