export default function Home() {
  return (
    <div className="h-full w-1/2 mx-auto font-serif">
      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          Talk about how you made your site and why you chose the tools you did.
          Briefly explain one challenge you experienced in setting up this site
          and how you overcame it.{" "}
        </h1>
        <textarea
          className="my-2 w-full h-40 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            " I made this using languages such as HTML,CSS, and JavaScript, with Next.js as Framework, and also Tailwind as an extension of CSS"
          }
          readOnly
        ></textarea>
      </div>
      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          What did you think of our service during the time you used it? Provide
          some constructive criticism or some features that impressed you.{" "}
        </h1>
        <textarea
          className="my-2 w-full h-40 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            " I used it before Image CDN is implemented in the netlify and now i like that i could use CDN inside netlify for free and its now very compatible with NEXT.js, I think the freature that impress me the most is that Netlify automatically handles the scaling needed for the backend"
          }
          readOnly
        ></textarea>
      </div>
      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
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
      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          Provide a link to documentation for a technical/developer-focused
          product, which you think are well done, and explain why you think they
          are well done.
        </h1>
        <textarea
          className="my-2 w-full h-40 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={`One of documentation I think is well done is Tailwind CSS https://tailwindcss.com/docs I think the design look good while keeping it informative, They also showcase what each styling utility would look like in the documentation and also the search function is also very easy to use with a easy accessable keyboard shortcut
          `}
          readOnly
        ></textarea>
      </div>
      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          Explain, in a couple of paragraphs, what you think are two major
          challenges around DNS configuration for less-technical customers
          hosting websites.
        </h1>
        <textarea
          className="my-2 w-full h-40 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            "I think the two major challenges around DNS configuration is first for the customer to understand how DNS configuration work they might be confuse for setiing up their DNS, mistakingly inputing a different records, like they might mistakenly set up a CNAME record instead of A Record making their site inaccessable, they might struggle to understand on how this records interact leading to misconfigurations in the DNS set-up process, Second is the cusotmer might expect the DNS settings to update instantly leading them to believe they misconfigured the DNS, not realizing that DNS changes can take upto a few minutes to 48 hours, They might also think their website is unsafe due to the SSL certificate delay "
          }
          readOnly
        ></textarea>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
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
          className="my-2 w-full h-40 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            "The information is very limited,the error code is not enough to troubleshoot the problem, I would contact the customer to clarify the issue even more and even guiding them on how to gather more info regarding the said error, I would also ask about their frameworks and dependencies version a mismatch version may be the reason for an error, the customer might have recently updated or add a new package which inturn conflict with the current framework and dependency,I might also check if his code version is matched with the company latest code version "
          }
          readOnly
        ></textarea>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
          How would you set up an http 301 status redirect from
          “/netlify/anything” on your site, to
          https://www.google.com/search?q=anything. Please provide the redirect
          formatting here. Now, how about a proxy redirect? Please add that
          proxy redirect rule directly to your site.
        </h1>
        <textarea
          className="my-2 w-full h-40 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={`Make a netlify.toml file 
[[redirects]]
from = /netlify/:anything
to = https://www.google.com/search?q=anything
status = 301
force = true
this forces the page using 301 htpp to redirect to a google search query also assigning the froce value to true ensures that the redirects happen even if route name exist
`}
          readOnly
        ></textarea>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          Please attempt to deploy a function on our service. This need not be
          complicated. It could be &quot;Hello World&quot;. Note that failure to
          deploy is not failing the exercise! Whether you have trouble or not,
          please describe what you experienced and how you attempted to
          troubleshoot any issues you encountered.
        </h1>
        <textarea
          className="my-2 w-full h-40 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={""}
          readOnly
        ></textarea>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] border-black px-8 py-4 ">
        <h1 className="text-center">
          {" "}
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
          className="my-2 w-full h-40 text-justify border resize-none rounded-lg focus:outline-blue-500 p-2 text-sm text-slate-700 "
          value={
            "First I would respond and acknowledge the report and the reporter regarding the issue to ensure that the report is heard and being taken care of, SEcondly i would investigate the issue to gather information regarding the issue that is important for the Security Team to investigate further, and also check what services are affected, Then if I see that the issue could have signifanct impact I would immideatly contact Higher Ups to ensure that they are aware of the issue and ready to immediatly came up with a resolution, Lastly is I continue to Monitor and gather information while telling the report that the issue is being treadted with the outmost urgency"
          }
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
