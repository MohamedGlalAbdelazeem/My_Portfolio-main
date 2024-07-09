import './edu.css'
import myPhoto from "./myphoto.jpeg"

 
 export default function Education() {
    return(
        <section className='edu' id='education'>
           <div className='main-edu'>
           <div className='first'>
               <h1 className='titl'>Education</h1>
                       <h4 className='special'><a href="https://www.eelu.edu.eg/" target='_blank' rel="noreferrer"> ➢  The Egyptian E-Learning University – EELU</a></h4>
                    <h4> ➢ Bachelor`s degree in Information technology.</h4>
                    <h4> ➢ graduation from faculty of computer and information technology.</h4>
                    <h4> ➢ GPA: 
                    <span> Very Good.</span>
                        </h4>
                    <h4>  ➢Graduaction Project :
                        <span> A+ [Gold Price forcasting By Ai]</span>
                        </h4>
                        <h4 className='special'><a href="https://github.com/ossu/computer-science?tab=readme-ov-file#core-programming"> ➢ I studied in the path ossu</a></h4>
            </div>
            <div className='second'>
                <img src={myPhoto} alt="myGraduation photo"/>
            </div>
           </div>
        </section>
    );
}