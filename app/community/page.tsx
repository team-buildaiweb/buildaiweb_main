"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CommunityPage() {
  const communityChannels = [
    {
      id: "discord",
      name: "Discord Community",
      description:
        "Connect with mobile app developers, get real-time support, and join AI code review sessions",
      members: "5,000+",
      link: "#",
      buttonText: "Join Discord",
      icon: "discord",
    },
    {
      id: "forum",
      name: "Developer Forum",
      description:
        "Share your mobile app projects, get code reviews, and discuss AI-driven development strategies",
      members: "3,000+",
      link: "#",
      buttonText: "Visit Forum",
      icon: "messages",
    },
    {
      id: "github",
      name: "GitHub",
      description:
        "Access example mobile apps, UI components, and contribute to our open-source mobile SDKs",
      members: "2,500+",
      link: "#",
      buttonText: "View Repository",
      icon: "github",
    },
    {
      id: "showcase",
      name: "App Showcase",
      description:
        "Explore community-built mobile apps and share your own creations with fellow developers",
      members: "1,000+",
      link: "#",
      buttonText: "View Showcase",
      icon: "sparkles",
    },
  ];
  const upcomingEvents = [
    {
      id: "webinar1",
      title: "Building AI-Powered Mobile Apps",
      date: "June 20, 2025",
      time: "2:00 PM EDT",
      type: "Webinar",
      speaker: "Sarah Johnson",
      description:
        "Learn how to integrate AI features into your mobile apps using our SDKs",
      tags: ["Mobile", "AI", "SDK"],
    },
    {
      id: "workshop1",
      title: "Native App Performance Optimization",
      date: "June 25, 2025",
      time: "11:00 AM EDT",
      type: "Workshop",
      speaker: "Michael Chen",
      description:
        "Hands-on workshop on optimizing AI model inference in mobile apps",
      tags: ["Performance", "Mobile", "Workshop"],
    },
    {
      id: "meetup1",
      title: "Mobile App Showcase & Code Review",
      date: "July 1, 2025",
      time: "6:00 PM EDT",
      type: "Virtual Meetup",
      speaker: "Community Team",
      description:
        "Present your mobile apps and get feedback from expert developers",
      tags: ["Community", "Code Review", "Mobile"],
    },
    {
      id: "hackathon1",
      title: "AI Mobile App Hackathon",
      date: "July 15, 2025",
      time: "9:00 AM EDT",
      type: "Hackathon",
      speaker: "Dev Team",
      description:
        "48-hour hackathon to build innovative AI-powered mobile apps",
      tags: ["Hackathon", "Mobile", "AI"],
    },
  ];
  const socialLinks = [
    {
      name: "X",
      link: "#",
      followers: "25K+",
      description: "Latest mobile dev tips & community highlights",
    },
    {
      name: "LinkedIn",
      link: "#",
      followers: "15K+",
      description: "Professional networking & job opportunities",
    },
    {
      name: "YouTube",
      link: "#",
      followers: "30K+",
      description: "Tutorials & mobile app development guides",
    },
    {
      name: "Medium",
      link: "#",
      followers: "10K+",
      description: "In-depth technical articles & case studies",
    },
  ];

  return (
    <div className='min-h-screen  bg-gray-50 flex flex-col'>
      <Navigation />{" "}
      <main className='flex-1 pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <section className='relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground rounded-3xl p-12 mb-16 overflow-hidden'>
          <div className='relative z-10'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
              Join Our Mobile Dev Community
            </h1>
            <p className='text-xl max-w-3xl mb-8 text-primary-foreground/90'>
              Connect with fellow mobile app developers, get AI-powered code
              reviews, and showcase your apps to a community of innovative
              developers.
            </p>
            <div className='flex flex-wrap gap-4'>
              <a
                href='#join-discord'
                className='inline-flex items-center px-6 py-3 bg-background/10 hover:bg-background/20 
                backdrop-blur-sm rounded-lg border border-primary-foreground/20 transition-colors'
              >
                Join 5,000+ Developers
              </a>
              <a
                href='#showcase'
                className='inline-flex items-center px-6 py-3 bg-background text-primary 
                hover:bg-background/90 rounded-lg transition-colors'
              >
                View App Showcase
              </a>
            </div>
          </div>
          <div className='absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent mix-blend-overlay'></div>
        </section>
        {/* Community Channels */}
        <section className='mb-16 space-y-8'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
            <h2 className='text-2xl sm:text-3xl font-bold text-foreground'>
              Community Channels
            </h2>
            <a
              href='#all-channels'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              View all channels →
            </a>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {communityChannels.map((channel) => (
              <div
                key={channel.id}
                className='group bg-card hover:bg-card/95 rounded-xl p-6 flex flex-col transition-all 
                  border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <span className='text-lg text-primary'>{channel.icon}</span>
                  <h3 className='text-lg font-semibold text-foreground'>
                    {channel.name}
                  </h3>
                </div>
                <p className='text-muted-foreground text-sm mb-6 flex-grow'>
                  {channel.description}
                </p>{" "}
                <div className='flex items-center gap-2 mb-4'>
                  <span className='text-sm text-muted-foreground'>
                    {channel.members} members
                  </span>
                </div>
                <a
                  href={channel.link}
                  className='w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-center 
                    transition-colors text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground'
                >
                  {channel.buttonText}
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* Upcoming Events */}
        <section className='mb-16'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
            <h2 className='text-2xl sm:text-3xl font-bold text-foreground'>
              Upcoming Events
            </h2>
            <a
              href='#all-events'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              View all events →
            </a>
          </div>
          <div className='grid sm:grid-cols-2 gap-6'>
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className='group bg-card hover:bg-card/95 rounded-xl p-6 border border-border 
                  hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all'
              >
                <div className='flex flex-col gap-4'>
                  <div className='flex justify-between items-start gap-4'>
                    <div className='space-y-1.5'>
                      <div className='flex items-center gap-2'>
                        <span className='inline-flex px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium'>
                          {event.type}
                        </span>
                        <div className='flex gap-1.5'>
                          {event.tags.map((tag, index) => (
                            <span
                              key={tag}
                              className='text-xs text-muted-foreground'
                            >
                              {index > 0 && "•"} {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors'>
                        {event.title}
                      </h3>
                      <p className='text-sm text-muted-foreground'>
                        {event.description}
                      </p>
                    </div>
                    <div className='text-right shrink-0'>
                      <p className='font-medium text-foreground'>
                        {event.date}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {event.time}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 pt-2 border-t border-border'>
                    <span className='text-sm font-medium text-foreground'>
                      Speaker:
                    </span>
                    <span className='text-sm text-muted-foreground'>
                      {event.speaker}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>{" "}
        {/* Social Links */}
        <section className='mb-16'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
            <h2 className='text-2xl sm:text-3xl font-bold text-foreground'>
              Follow Our Community
            </h2>
            <a
              href='#social'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              View all platforms →
            </a>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className='group bg-card hover:bg-card/95 rounded-xl p-6 border border-border 
                  hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all'
              >
                <h3 className='font-semibold mb-1.5 text-foreground group-hover:text-primary transition-colors'>
                  {social.name}
                </h3>
                <p className='text-sm text-muted-foreground mb-3'>
                  {social.description}
                </p>
                <p className='text-sm font-medium text-foreground'>
                  {social.followers} followers
                </p>
              </a>
            ))}
          </div>
        </section>
        {/* Share Your Story */}
        <section
          className='relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground 
          rounded-3xl p-12 text-center overflow-hidden'
        >
          <div className='relative z-10 max-w-3xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              Showcase Your Mobile App
            </h2>
            <p className='text-lg mb-8 text-primary-foreground/90'>
              Built an innovative mobile app with our AI tools? Share your
              success story and get featured in our community spotlight. Inspire
              others and get valuable feedback from the community.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <a
                href='#submit'
                className='inline-flex items-center justify-center px-6 py-3 bg-background text-primary 
                  font-medium rounded-lg hover:bg-background/90 transition-colors'
              >
                Submit Your App
              </a>
              <a
                href='#browse'
                className='inline-flex items-center justify-center px-6 py-3 bg-background/10 
                  backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground 
                  font-medium rounded-lg hover:bg-background/20 transition-colors'
              >
                Browse Showcase
              </a>
            </div>
          </div>
          <div className='absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent mix-blend-overlay'></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
