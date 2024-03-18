import Image from "next/image";
import { PageTitle, SeoMetadata } from "@/components";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { aboutPageData, site_metadata } from "@/constants";


const About = () => {
  return (
    <section className="md:max-w-3xl">
      <SeoMetadata
        title={site_metadata?.about?.title}
        desc={site_metadata?.about?.desc}
      />
      
      <PageTitle title="About me" effect="purple" />
      <div className="">
        {/* Intro */}
        <p className="info dark:bg-transparent dark:p-4 dark:border-l-[.5px] dark:border-teal-400/40 dark:rounded">
          <Image src="/me.png" width={100} height={100} alt="Fazle Rabbi" />
          Hello, I'm <span className="font-bold">Anubhav</span>,
          {" "}
          {aboutPageData?.about_1}
          <br />
          <br />
          Here have a look at my {" "}
          <Link className="link" href="/projects">
            projects
          </Link>
          .
        </p>
      </div>

      <div className="my-10">
        <h2 className="sub_heading">What I Love 😍</h2>
        <p className="info">{aboutPageData?.what_i_love}</p>
      </div>

      <div className="my-2">
        <h2 className="sub_heading">My Hobbies 🎯</h2>
        <p className="info">{aboutPageData?.my_hobbies}</p>
      </div>

      <Link className="inline-block" href="/skills">
        <button className="btn_link" type="button">
          My expertise
          <MoveUpRight size={18} />
        </button>
      </Link>
    </section>
  );
};

export default About;
