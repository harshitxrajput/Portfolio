import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, [])

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
          <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <a className='image-wrapper object-contain' href='https://chatsync-c0xd.onrender.com' target='_blank'>
                        <img src="/images/project1.png" alt="ChatSync" className='object-fill border-2'/>
                    </a>

                    <div className='text-content'>
                        <h2>ChatSync — Keeping Conversations in Perfect Sync.</h2>
                        <p className='text-white-50 md:text-xl'>
                            ChatSync is a real-time MERN stack chat application enabling seamless, instant messaging with synchronized conversations.
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper p-2 bg-[#ffffff8b]'>
                            <a href="https://harshitrajput-twitterclone.onrender.com" target='_blank'>
                                <img src="/images/project2.png" alt="X Clone" className='object-fill border-2' />
                            </a>
                        </div>

                        <h2>TweetSphere — A Place for Every Voice.</h2>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper px-0 bg-[#ffe7eb]'>
                            <img src="/images/project3.png" alt="Tomato" className='object-fill border-2' />
                        </div>

                        <h2>Tomato — Delivering Happiness, One Meal at a Time.</h2>
                    </div>
                </div>
            </div>
          </div>
        </section>
  )
}

export default ShowcaseSection
