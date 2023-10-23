import { Message, Calendar, Job, Profile, Element,   Monitor , Share, Report, Settings, ElementGray, green, red, orange } from "../assets";

export const menu = [
    {
      id: 1,
      title: "Menu",
      listItems: [
        {
          id: 1,
          title: "Dashboard",
          icon: Element(),
        },
        {
          id: 2,
          title: "Message",
          icon: Message(),
        },
        {
          id: 3,
          title: "Calendar",
          icon: Calendar(),
        },
      ],
    },
    {
      id: 2,
      title: "RECRUITMENT",
      listItems: [
        {
          id: 1,
          title: "Jobs",
          icon: Job(),
        },
        {
          id: 2,
          title: "Candidates",
          icon: Profile(),
        },
        {
          id: 3,
          title: "My Referrals",
          icon: Share(),
        },
        {
          id: 4,
          title: "Career Site",
          icon: Monitor(),
        },
      ],
    },
    {
      id: 3,
      title: "ORGANIZATION",
      listItems: [
        {
          id: 1,
          title: "Employee",
          icon: Profile(),
        },
        {
          id: 2,
          title: "Structure",
          icon: Share(),
        },
        {
          id: 3,
          title: "Report",
          icon: Report(),
        },
        {
          id: 4,
          title: "Settings",
          icon: Job(),
        },
      ],
    },  
  ];
  
  export const messages = [
    {
      id: 1,
      name: "Cameron Williamson",
      note: "Have you planned any deadline...",
      icon: '/svg/messageIcon.svg'
    },
    {
      id: 2,
      name: "Jacob Jones",
      note: "The candidate has been shortlis...",
      icon: '/svg/messageIcon2.svg'
    },
  ]

  export const jobs= [
    {
      id: 1,
      name: "Product Designer",
      note: "Spotify, Singapore - 6 hours ago",
      icon: '/svg/spotify.svg'
    },
    {
      id: 2,
      name: "IOS Developer",
      note: "San Francisco, CA - 2 Days ago",
      icon: '/svg/slack.svg'
    },
    {
      id: 3,
      name: "Brand Strategist",
      note: "New york, US - 2 Days ago",
      icon: '/svg/adobe.svg'
    },
    {
      id: 4,
      name: "Jr. Frontend Engineer",
      note: "Spotify, Singapore - 2 Days ago",
      icon: '/svg/kayako.svg'
    },
    
  ]

  export const widgetData= [
    {
      id: 1,
      name: "Total Applications",
      total: 5672,
      color: "#38CB89",
      icon: green()
    },
    {
      id: 2,
      name: "Shortlisted Candidates",
      total: 3045,
      color: "#FFA600",
      icon: orange()
    },
    {
      id: 3,
      name: "Rejected Candidates",
      total: 1055,
      color: "#FF5630",
      icon: red()
    },
  ]