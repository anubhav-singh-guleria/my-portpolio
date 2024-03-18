export const projectPageData = {
  intro:
    "Here is a list of my side projects.",
  favourite_projects: [
    {
      id: 1,
      cover: "/images/cover_images/miro-clone.png",
      name: "AG-Labs",
      desc: "This project involved the development of a feature-rich whiteboard application. The application provides a range of tools, including text editing, shape drawing, sticky notes, and a freehand pencil tool, along with advanced layering and coloring capabilities.",
      technologies: [
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "TailwindCSS",
          style: "badge_tailwind"
        },
        {
          name: "Convex",
          style: "badge_react_query"
        },{
          name: "Next.js",
          style: "badge_nextjs"
        }
      ],
      links: {
        github: "https://github.com/anubhav-singh-guleria/shared_space",
        live: "https://shared-space-d3mz.vercel.app/"
      },
      details: {
        title: "AG-Labs",
        desc: "The application was built using React, Next.js 14, Convex for the database, and Live-Blocks for real-time collaboration, enabling a seamless and interactive user experience with undo/redo functionality, keyboard shortcuts, and real-time collaboration features.",
        features: [
          "🛠️ Whiteboard from scratch",
          "🧰 Toolbar with Text, Shapes, Sticky Notes & Pencil",
          "🪄 Layering functionality",
          "🎨 Coloring system",
          "↩️ Undo & Redo functionality",
          "⌨️ Keyboard shortcuts",
          "🤝 Real-time collaboration",
          "💾 Real-time database",
          "🔐 Auth, organisations and invites",
          "⭐️ Favoriting functionality"
        ]
      }
    }
  ],
  more_projects: "https://github.com/anubhav-singh-guleria?tab=repositories"
};
