import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: 'https://thinkotb.b-cdn.net/wp-content/uploads/2023/01/c-4.svg',
    label: 'C#',
    desc: 'Web Development and Desktop Development'
  },
  {
    imgSrc: 'https://www.adaweb.es/wp-content/uploads/2022/05/logotipo_css-min.png',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: 'https://www.dataprix.com/files/uploads/103image/logo_sqlserver.png',
    label: 'SQL Server',
    desc: 'Database'
  },
  {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9JL2hQz-EKoPHG_HksoKlY9Eg9Orf9bCg&s',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: 'https://file.labex.io/namespace/df87b950-1f37-4316-bc07-6537a1f2c481/java/lab-your-first-java-lab/assets/java.svg',
    label: 'Java',
    desc: 'Desktop Development'
  },
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png',
    label: 'Python',
    desc: 'Backend Development and Desktop Development'
  },
];
function Skill(){
    return(
        <section className="section" id="skill">
            <div className="container">
                <h2 className="headline-2">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill, _minmax(250px,1fr))]">
                    {skillItem.map(({imgSrc, label, desc}, key)=>(
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skill;