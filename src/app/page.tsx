export default function Home() {
  return (
    <div className="h-full 2xl:px-[28rem] xl:px-48 md:px-32 sm:px-16 px-8 lg:text-base text-sm mx-auto font-serif">
      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          Talk about how you made your site and why you chose the tools you did.
          Briefly explain one challenge you experienced in setting up this site
          and how you overcame it.{" "}
        </h1>
        <textarea
          className="my-2 w-full min-h-80 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            "I made this using languages such as HTML, CSS, and JavaScript, with Next.js as the framework and Tailwind as an extension of CSS. I also used the Netlify CLI to develop and build the site locally. One challenge I experienced is that after deployment, it throws an error saying 'Page Not Found' and does not load my files, even though there are no errors and my files are visible in the build and deployment logs. The solution I implemented involved making changes to the netlify.toml file, moving my project outside of OneDrive, deleting the .next directory, and rebuilding the website."
          }
          readOnly
        ></textarea>
      </div>
      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          What did you think of our service during the time you used it? Provide
          some constructive criticism or some features that impressed you.{" "}
        </h1>
        <textarea
          className="my-2 w-full min-h-80 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            " I used Netlify before Image CDN is implemented, and now i like that I canuse CDN within netlify for free and it's now very compatible with Next.js, I think the feature that impress me the most is how Netlify automatically handles the scaling needed for the backend"
          }
          readOnly
        ></textarea>
      </div>
      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          Rank your 5 favorite and 5 least favorite activities from this list:
          https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab
        </h1>
        <textarea
          className="my-2 h-72 w-full text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={`My 5 favorites are: 
Set up your own copy of several site frameworks for debugging
Work with prospective customers to explain our service and the pricing model
Work with the development team to help design a new feature based on feedback from customers
Debug a customer's build using a programming language and framework that you've never seen before
Join a Zoom call with a VIP customer you have been helping via email, upon their request
My 5 least favorites are:
Help manage communications during a service outage
Engage multiple users at once via chat to answer their questions and troubleshoot problems
Respond to Netlify customers on Twitter
Respond to 20+ support requests via email every day
Help train and onboard new support teammates
`}
          readOnly
        ></textarea>
      </div>
      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          Provide a link to documentation for a technical/developer-focused
          product, which you think are well done, and explain why you think they
          are well done.
        </h1>
        <textarea
          className="my-2 w-full min-h-80 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={`One of the documentations I think is well done is Tailwind CSS's (https://tailwindcss.com/docs). I think the design looks good while remaining informative. They also showcase what each styling utility would look like directly in the documentation. Additionally, the search function is very easy to use, with an accessible keyboard shortcut
          `}
          readOnly
        ></textarea>
      </div>
      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          Explain, in a couple of paragraphs, what you think are two major
          challenges around DNS configuration for less-technical customers
          hosting websites.
        </h1>
        <textarea
          className="my-2 w-full min-h-80 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            "I think the two major challenges around DNS configuration are, first, that customers might struggle to understand how DNS configuration works, leading to confusion during setup. They could mistakenly input incorrect records, such as setting up a CNAME record instead of an A record, which can make their site inaccessible. Additionally, they might find it difficult to grasp how these records interact, resulting in misconfigurations in the DNS setup process. Second, customers might expect DNS settings to update instantly, leading them to believe they misconfigured the DNS when changes don’t appear immediately. They may not realize that DNS changes can take anywhere from a few minutes to 48 hours to propagate. This delay, along with the time it takes for SSL certificates to be issued, might also make them think their website is unsafe"
          }
          readOnly
        ></textarea>
      </div>

      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          A customer writes in to Support saying simply that their “site won’t
          build”. You have access to their build logs, and there you see this
          error: Build failed due to a user error: Build script returned
          non-zero exit code: 2. You have no more information than this and the
          site’s source repository is private so you cannot test the build
          yourself. How would you troubleshoot this issue? What steps would you
          take? Also, please compose your best customer-facing first response.
        </h1>
        <textarea
          className="my-2 w-full min-h-80 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            "The information provided is very limited, and the error code alone is not enough to troubleshoot the problem effectively. I would contact the customer to clarify the issue further and guide them on how to gather more details about the error. I would also ask about their framework and dependency versions, as a version mismatch could be the reason for the error. For instance, the customer might have recently updated or added a new package, which could conflict with the current framework and dependencies. Additionally, I would check if their code version matches the company’s latest code version, as discrepancies there could also lead to issues"
          }
          readOnly
        ></textarea>
      </div>

      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          How would you set up an http 301 status redirect from
          “/netlify/anything” on your site, to
          https://www.google.com/search?q=anything. Please provide the redirect
          formatting here. Now, how about a proxy redirect? Please add that
          proxy redirect rule directly to your site.
        </h1>
        <textarea
          className="my-2 w-full min-h-80 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={`Make a netlify.toml file 
[[redirects]]
from = /netlify/:anything
to = https://www.google.com/search?q=anything
status = 301
force = true
Using 301 htpp forces the pageto redirect to a google search query also assigning the force value to true ensures it redirects the page even if the route name exist
I made a simple proxy redirect that rewrite the page from https://assessment-website.netlify.app/sample to https://assessment-website.netlify.app/proxysample
`}
          readOnly
        ></textarea>
      </div>

      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          Please attempt to deploy a function on our service. This need not be
          complicated. It could be Hello World&quot;. Note that failure to
          deploy is not failing the exercise! Whether you have trouble or not,
          please describe what you experienced and how you attempted to
          troubleshoot any issues you encountered.
        </h1>
        <textarea
          className="my-2 w-full min-h-80 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={`There isn’t much of an issue I encountered when creating a function in Netlify. After prompting to create a function, Netlify already provided a simple 'Hello World' function for me to use.
The function is accessible at the designated endpoint.
https://assessment-website.netlify.app/.netlify/functions/hello-world`}
          readOnly
        ></textarea>
      </div>

      <div className="mt-8  bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          We understand you don't know anything about our internal procedures at
          this stage, but we want you to explain at a high level how you'd react
          to this situation: You receive a report of a severe security issue on
          www.netlify.com. You can't immediately confirm the report, so what
          steps might you take to investigate or substantiate the report? What
          might you say to the reporter, even though we haven't confirmed their
          assertion yet, that will instill confidence that our business is very
          concerned about security? You believe there is a reasonable chance the
          report is correct and the problem is very large and impactful. How
          might you escalate?
        </h1>
        <textarea
          className="my-2 w-full min-h-80 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            "First, I would respond to and acknowledge the report and the reporter regarding the issue to ensure that the report is heard and is being taken care of. Secondly, I would investigate the issue to gather important information for the Security Team to investigate further, including checking which services are affected. Then, if I determine that the issue could have a significant impact, I would immediately contact higher-ups to ensure they are aware of the issue and ready to come up with a resolution promptly. Lastly, I would continue to monitor and gather information while informing the reporter that the issue is being treated with the utmost urgency"
          }
          readOnly
        ></textarea>
      </div>
      <footer className="my-4 text-xs opacity-50 font-sans">
        <p className="text-center ">submitted by Troy Sarinas</p>
        <p className="text-center">troysarinas22@gmail.com</p>
        <p className="text-center ">+639569878251</p>
      </footer>
    </div>
  );
}
