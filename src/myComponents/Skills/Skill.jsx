import './skills.css'
import html from './skillsicons/html.png';
import css from './skillsicons/css.png'
import js from './skillsicons/js.png'
import mui from './skillsicons/mui.png'
import react from './skillsicons/react.png'
import redux from './skillsicons/redux.png'
import mdb from './skillsicons/MDB.png'
import s from './skillsicons/s.png'
import p from './skillsicons/p.png'
import a from './skillsicons/a.png'
import boots from './skillsicons/bootstarp.jpeg'
import t from './skillsicons/t.png'
import j from './skillsicons/j.png'
import git from './skillsicons/git.png'
import hup from './skillsicons/hup.png'


export default function Skills() {
    return(
        <section 
        id='skills' 
        className='skills'
        >
            <h1 className='titl'>Skills</h1>
            <div className='imgs'>
            <img src={react} />
                <img src={redux} style={{backgroundColor:"white"}}/>
                <img src={mui} />
                <img src={s} />
                <img src={j} />
                <img src={p} />
                <img src={js} />
                <img src={mdb} />
                <img src={a} />
                <img src={html} />
                <img src={css} />
                <img src={t} />
                <img src={boots} />
                <img src={git} />
                <img src={hup} style={{backgroundColor:"white"}} />
             </div>
        </section>
    );
}
