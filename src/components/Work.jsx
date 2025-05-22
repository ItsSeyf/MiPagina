import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: 'YT-video-d.png',
    title: 'Youtube Video Downloader',
    tags: ['Python', 'Development'],
    projectLink: 'https://github.com/ItsSeyf/YT-Video-Downloader'
  },
  {
    imgSrc: 'app-message.png',
    title: 'Message App',
    tags: ['API', 'SPA', 'React', 'MVC'],
    projectLink: 'https://github.com/ItsSeyf/App-Message'
  },
  {
    imgSrc: 'webpage.png',
    title: 'Web page',
    tags: ['Development', 'HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://sofisticcode.com/'
  },
  {
    imgSrc: 'port-scanner.jpg',
    title: 'Port Scanner',
    tags: ['C#', 'Development', 'Console App'],
    projectLink: 'https://github.com/ItsSeyf/PortScanner'
  },
  {
    imgSrc: 'database.png',
    title: 'Database for a company',
    tags: ['SQL Server', 'Development', 'Database'],
    projectLink: 'https://github.com/ItsSeyf/BDDU'
  },
  {
    imgSrc: 'portfolio.png',
    title: 'Portfolio with React',
    tags: ['React', 'Development', 'SPA', 'Tailwind CSS'],
    projectLink: 'https://github.com/ItsSeyf/MiPagina'
  },
];
function Work(){
    return(
        <section className="section" id='work'>
            <div className="container">
                <h2 className="headline-2 mb-8">
                    My projects
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Work;