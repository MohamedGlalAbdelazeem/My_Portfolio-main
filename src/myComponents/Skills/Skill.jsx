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
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_ID7MuyUQkf0HDeOt-rQRJzcFwsbwZcumA&s"} />
                <img src={j} />
                <img src={js} />
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s"} />
                <img src={react} />
                <img src={redux} style={{backgroundColor:"white"}}/>
                <img src={mui} />
                <img src={s} />
                <img src={p} />
                <img src={mdb} />
                <img src={a} />
                <img src={html} />
                <img src={css} />
                <img src={t} />
                <img src={boots} />
                <img src={git} />
                <img src={"https://images.ctfassets.net/in6v9lxmm5c8/57MXX73Nx2rUnUI730EykA/8d13236943bb46948155f92f2325369e/firebase.png?q=50&fm=webp"} />
                <img src={hup} style={{backgroundColor:"white"}} />
             </div>
        </section>
    );
}
