const aboutItems = [
  {
    label: 'Project done',
    number: 5
  },
  {
    label: 'Years of experience',
    number: 0
  }
];
function About(){
    return(
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                  <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome! I&apos;m Michael, a junior web and desktop development. I'm a passionate developer with a strong foundation in programming languages and frameworks. I'm eager to learn and grow in the field of software development, and I'm excited to take on new challenges that will help me expand my skill set. I'm committed to delivering high-quality work and continuously improving my abilities. I look forward to the opportunity to contribute to your team and make a positive impact on your projects.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({
                      label, number
                    }, key)=>(
                      <div key={key}>
                        <div className="flex items-center md:mb-2">
                          <span className="text-2xl font-semibold md:text-4xl">
                            {number}
                          </span>
                          <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                        </div>
                        <p className="text-sm text-zinc-400">{label}</p>
                      </div>
                    ))}
                    <img src="/Logo.png" width={30} height={30} alt="" className="ml-auto md:w-[40px] md:h-[40px]" />
                  </div>
                </div>
            </div>
        </section>
    )
}
export default About;