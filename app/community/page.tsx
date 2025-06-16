"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CommunityPage() {
  const communityChannels = [
    {
      id: "discord",
      name: "Discord Community",
      description:
        "Join our Discord server for real-time discussions, support, and collaboration",
      members: "5,000+",
      link: "#",
      buttonText: "Join Discord",
    },
    {
      id: "forum",
      name: "Community Forum",
      description:
        "Discuss features, share projects, and get help from other developers",
      members: "10,000+",
      link: "#",
      buttonText: "Visit Forum",
    },
    {
      id: "github",
      name: "GitHub",
      description:
        "Contribute to our open source projects and access example code",
      members: "2,000+",
      link: "#",
      buttonText: "View Repository",
    },
  ];

  const upcomingEvents = [
    {
      id: "webinar1",
      title: "Getting Started with AI Web Development",
      date: "June 20, 2025",
      time: "2:00 PM EDT",
      type: "Webinar",
      speaker: "Sarah Johnson",
    },
    {
      id: "workshop1",
      title: "Advanced AI Features Workshop",
      date: "June 25, 2025",
      time: "11:00 AM EDT",
      type: "Workshop",
      speaker: "Michael Chen",
    },
    {
      id: "meetup1",
      title: "BuildAIWeb Community Meetup",
      date: "July 1, 2025",
      time: "6:00 PM EDT",
      type: "Virtual Meetup",
      speaker: "Community Team",
    },
  ];

  const socialLinks = [
    { name: "Twitter", link: "#", followers: "15K+" },
    { name: "LinkedIn", link: "#", followers: "8K+" },
    { name: "YouTube", link: "#", followers: "20K+" },
    { name: "Medium", link: "#", followers: "5K+" },
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 pt-16 max-w-6xl mx-auto px-4'>
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12'>
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            Join Our Community
          </h1>
          <p className='text-gray-600 text-lg max-w-3xl'>
            Connect with fellow developers, share your projects, and learn from
            others in the BuildAIWeb community.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {communityChannels.map((channel) => (
            <div
              key={channel.id}
              className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col'
            >
              <h2 className='text-2xl font-bold mb-3'>{channel.name}</h2>
              <p className='text-gray-600 mb-4 flex-grow'>
                {channel.description}
              </p>
              <div className='mb-4'>
                <span className='text-sm text-gray-500'>
                  {channel.members} members
                </span>
              </div>
              <a
                href={channel.link}
                className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors'
              >
                {channel.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl font-bold mb-6'>Upcoming Community Events</h2>
          <div className='grid gap-4'>
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className='bg-white rounded-lg shadow-sm border border-gray-100 p-6'
              >
                <div className='flex justify-between items-start'>
                  <div>
                    <span className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-2'>
                      {event.type}
                    </span>
                    <h3 className='text-xl font-semibold mb-2'>
                      {event.title}
                    </h3>
                    <p className='text-gray-600'>Speaker: {event.speaker}</p>
                  </div>
                  <div className='text-right'>
                    <p className='font-semibold'>{event.date}</p>
                    <p className='text-gray-500'>{event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl font-bold mb-6'>Follow Us</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className='bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-shadow'
              >
                <h3 className='font-semibold mb-2'>{social.name}</h3>
                <p className='text-gray-600'>{social.followers} followers</p>
              </a>
            ))}
          </div>
        </div>

        <div className='bg-blue-50 rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Share Your Story</h2>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Have you built something amazing with BuildAIWeb? We'd love to
            feature your project in our community showcase!
          </p>
          <a
            href='#'
            className='inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
          >
            Submit Your Project
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
