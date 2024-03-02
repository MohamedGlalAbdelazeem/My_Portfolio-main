import { useState } from 'react';
import './main.css';
import { myProjects } from './MyProjects';
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
    const [isActive, setIsActive] = useState("all");
    const [projectsArray, setProjectsArray] = useState(myProjects);

    const handleClick = (btnCategoria) => {
        const filteredProjects = myProjects.filter((item) => item.categoria === btnCategoria);
        setProjectsArray(filteredProjects);
        setIsActive(btnCategoria);
    }
    const active = "active"
    return (
        <>
                <h1 className='titl' id="projects">Projects</h1>
            <main  className='flex ' >
                <section className='left-section flex'>
                    <button onClick={() => { 
                        setIsActive("all") 
                        setProjectsArray(myProjects)}} 
                        className={isActive === "all" ? active : ""}>
                       All Projects
                    </button>

                    <button onClick={() => { handleClick("htmlcss") }} className={isActive === "htmlcss" ? active : ""}>HTML5&CSS3</button>

                    <button onClick={() => { handleClick("js") }} className={isActive === "js" ? active : ""}>javascript</button>

                    <button onClick={() => { handleClick("react") }} className={isActive === "react" ? active : ""}>React Js</button>


                </section>
                <section className='rigth-section '>
                <AnimatePresence>
                    {projectsArray.map((item) => {
                        return (
                            <motion.article
                            layout
                            initial={{ transform: "scale(0.4)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{ duration:1,type:"spring", damping: 8 , staggerDirection:50}}
                            key={item.id} className='card'>
                                <motion.img width={250} src={item.imgUrl} alt="" />
                                <div style={{ width: "230px" }} className="box">
                                    <h5 className='ttle'>
                                        {item.title}
                                    </h5>
                                    
                                    <div className="flex" style={{marginTop:"1rem"}}>
                                        <div>
                                            <a href={item.RepoLink} target='_blank' rel="noreferrer"  > 
                                            <i className="fa-brands fa-github"></i>
                                            </a>
                                        </div>
                                        <div >
                                            <a href={item.LiveDemo} target='_blank' rel="noreferrer">
                                            <i className="fa-solid fa-link"></i>
                                                 </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}    
                </AnimatePresence>
                </section>
            </main>
        </>
    )
}


export default Main;