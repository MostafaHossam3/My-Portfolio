window.PORTFOLIO_DATA = {
  skills: [
    { category: 'Programming Languages', name: 'Dart',           slug: 'dart' },
    { category: 'Programming Languages', name: 'Java',           slug: 'openjdk' },
    { category: 'Programming Languages', name: 'Swift',          slug: 'swift' },
    { category: 'Programming Languages', name: 'Kotlin',         slug: 'kotlin' },

    { category: 'Mobile Development',    name: 'Flutter',        slug: 'flutter' },
    { category: 'Mobile Development',    name: 'Firebase',       slug: 'firebase' },
    { category: 'Mobile Development',    name: 'Google Maps',    slug: 'googlemaps' },
    { category: 'Mobile Development',    name: 'Xcode',          slug: 'xcode' },
    { category: 'Mobile Development',    name: 'Android Studio', slug: 'androidstudio' },
    { category: 'Mobile Development',    name: 'REST APIs',      slug: null, fa: 'fa-solid fa-plug' },
    { category: 'Mobile Development',    name: 'Deep Linking',   slug: null, fa: 'fa-solid fa-link' },
    { category: 'Mobile Development',    name: 'Custom UI',      slug: null, fa: 'fa-solid fa-wand-magic-sparkles' },

    { category: 'Architecture & Patterns', name: 'Clean Architecture', slug: null, fa: 'fa-solid fa-layer-group' },
    { category: 'Architecture & Patterns', name: 'MVVM',               slug: null, fa: 'fa-solid fa-layer-group' },
    { category: 'Architecture & Patterns', name: 'MVC',                slug: null, fa: 'fa-solid fa-layer-group' },

    { category: 'Patterns & Principles',   name: 'SOLID',              slug: null, fa: 'fa-solid fa-shield-halved' },
    { category: 'Patterns & Principles',   name: 'OOP',                slug: null, fa: 'fa-solid fa-cubes' },
    { category: 'Patterns & Principles',   name: 'Design Patterns',    slug: null, fa: 'fa-solid fa-shapes' },

    { category: 'State Management',      name: 'Provider',       slug: null, fa: 'fa-solid fa-cubes' },
    { category: 'State Management',      name: 'Riverpod',       slug: null, fa: 'fa-solid fa-cubes' },
    { category: 'State Management',      name: 'Bloc',           slug: null, fa: 'fa-solid fa-cubes' },
    { category: 'State Management',      name: 'Cubit',          slug: null, fa: 'fa-solid fa-cubes' },

    { category: 'Development Tools',     name: 'Git',            slug: 'git' },
    { category: 'Development Tools',     name: 'GitHub',         slug: 'github' },
    { category: 'Development Tools',     name: 'Bitbucket',      slug: 'bitbucket' },
    { category: 'Development Tools',     name: 'Figma',          slug: 'figma' },
    { category: 'Development Tools',     name: 'Cursor',         slug: 'cursor' },
    { category: 'Development Tools',     name: 'Codemagic',      slug: 'codemagic' },
    { category: 'Development Tools',     name: 'GitHub Actions', slug: 'githubactions' },

    { category: 'Analytics & Monitoring', name: 'Sentry',              slug: 'sentry' },
    { category: 'Analytics & Monitoring', name: 'Firebase Analytics',  slug: 'firebase' },
    { category: 'Analytics & Monitoring', name: 'Firebase Crashlytics',slug: 'firebase' },
    { category: 'Analytics & Monitoring', name: 'Adjust',              slug: null, fa: 'fa-solid fa-chart-line' },

    { category: 'Notifications & Engagement', name: 'OneSignal',        slug: 'onesignal' },
    { category: 'Notifications & Engagement', name: 'MoEngage',         slug: null, fa: 'fa-solid fa-bell' },
    { category: 'Notifications & Engagement', name: 'Firebase Messaging',slug: 'firebase' },
    { category: 'Notifications & Engagement', name: 'Push Notifications',slug: null, fa: 'fa-solid fa-bell' },

    { category: 'AI Productivity',       name: 'AI-assisted Dev',  slug: null, fa: 'fa-solid fa-robot' },
    { category: 'AI Productivity',       name: 'Code Review',      slug: null, fa: 'fa-solid fa-code' },
    { category: 'AI Productivity',       name: 'Workflow Opt.',    slug: null, fa: 'fa-solid fa-bolt' },

    { category: 'Deployment',            name: 'App Store',       slug: 'apple' },
    { category: 'Deployment',            name: 'Google Play',     slug: 'googleplay' },
  ],

  projects: [
    {
      title: 'Trolley',
      country: 'kw',
      subtitle: 'E-Commerce App',
      stack: 'Flutter, Dart, Firebase, Swift',
      desc: 'A full-featured grocery e-commerce platform serving the Kuwait and GCC market. It offers smart product search, multi-payment checkout (KNET, Apple Pay, Card, Cash), home delivery and in-store pickup, a digital wallet, loyalty rewards, premium subscriptions, in-store scan-to-pay, and DHL international shipping. Trolley is part of a larger retail ecosystem that includes a Picker App for order fulfillment, a Label Print App, a Barcode Scanner App, and a POS System.',
      images: [
        'assets/images/projects/trolley/screen-home.png',
        'assets/images/projects/trolley/screen-profile.png',
        'assets/images/projects/trolley/screen-categories.png',
      ],
      links: [
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=kw.com.trolley.ecom&hl=en&gl=US', icon: 'fa-brands fa-google-play' },
        { label: 'App Store',   url: 'https://apps.apple.com/kw/app/trolley-%D8%AA%D8%B1%D9%88%D9%84%D9%8A/id1637444113', icon: 'fa-brands fa-app-store-ios' },
      ],
    },
    {
      title: 'Ezhalha',
      country: 'sa',
      subtitle: 'Cars Service Apps — User & Service Provider',
      stack: 'Flutter, Dart, Firebase',
      desc: 'The number one and only super app in the Middle East that serves you and your car in one platform delivery services. Built as two separate apps — one for users and one for service providers — covering the full car service lifecycle.',
      images: [
        'assets/images/projects/ezhalha/screen-1.png',
        'assets/images/projects/ezhalha/screen-2.png',
        'assets/images/projects/ezhalha/screen-3.png',
      ],
      links: [
        { label: 'User — Google Play',    url: 'https://play.google.com/store/apps/details?id=com.na.azhelha',              icon: 'fa-brands fa-google-play' },
        { label: 'User — App Store',      url: 'https://apps.apple.com/us/app/ezhalha-%D8%A7%D8%B2%D9%87%D9%84%D9%87%D8%A7/id1218439781', icon: 'fa-brands fa-app-store-ios' },
        { label: 'Provider — Google Play',url: 'https://play.google.com/store/apps/details?id=ezhalha.sa.com.ezhalhaprovider', icon: 'fa-brands fa-google-play' },
        { label: 'Provider — App Store',  url: 'https://apps.apple.com/ng/app/ezhalha-provider/id1437540949',               icon: 'fa-brands fa-app-store-ios' },
      ],
    },
    {
      title: 'Ole Coffee',
      country: 'kw',
      subtitle: 'Ordering & Loyalty App',
      stack: 'Flutter, Dart, Google Maps, Firebase, Shorebird, Codemagic',
      desc: 'Cross-platform mobile app for a multi-branch coffee chain featuring Google Maps branch discovery, Algolia-powered search, configurable menu ordering with 4 payment methods (Google Pay, Apple Pay, KNET, Wallet), tiered loyalty program, digital wallet, social gifting, and push notifications. Architected using Clean Architecture with 17 feature modules, Provider state management, and GetIt DI. Integrated Firebase Analytics/Crashlytics, Sentry monitoring, and Shorebird OTA updates.',
      images: [
        'assets/images/projects/ole-coffee/screen-1.png',
        'assets/images/projects/ole-coffee/screen-2.png',
        'assets/images/projects/ole-coffee/screen-3.png',
      ],
      links: [
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.enegix.ole&hl=en&gl=US', icon: 'fa-brands fa-google-play' },
        { label: 'App Store',   url: 'https://apps.apple.com/kw/app/ole/id6593679795',                           icon: 'fa-brands fa-app-store-ios' },
      ],
    },
    {
      title: 'Go Care & Go Care Business',
      country: 'eg',
      subtitle: 'Beauty Services App — User & Provider',
      stack: 'Flutter, Dart, Firebase',
      desc: 'A platform that links service providers and beneficiaries within the scope of women\'s beauty centers, enabling seamless service booking by type. Built as two separate apps — one for clients and one for beauty business providers — covering the full booking and service lifecycle.',
      images: [
        'assets/images/projects/go-care/screen-1.png',
        'assets/images/projects/go-care/screen-2.png',
        'assets/images/projects/go-care/screen-3.png',
      ],
      links: [
        { label: 'Client — Google Play',    url: 'https://play.google.com/store/apps/details?id=com.adwat.gocare',       icon: 'fa-brands fa-google-play' },
        { label: 'Client — App Store',      url: 'https://apps.apple.com/eg/app/go-care/id1624693673',                   icon: 'fa-brands fa-app-store-ios' },
        { label: 'Provider — App Store',    url: 'https://apps.apple.com/eg/app/go-care-business/id6443906933',          icon: 'fa-brands fa-app-store-ios' },
      ],
    },
  ],

  experience: [
    {
      role: 'Senior Flutter Developer',
      company: 'Enegix',
      period: '09/2023 – Present',
      location: 'Alexandria, Egypt',
      bullets: [
        'Migrated native Android/iOS applications to Flutter while preserving full feature parity, UI consistency, and production stability.',
        'Applied AI-assisted development workflows to accelerate implementation, debugging, and technical documentation while maintaining high code quality standards.',
        'Integrated REST APIs, Firebase, Adjust, MoEngage, Gameball, and multiple third-party SDKs.',
        'Implemented secure payment integrations including Apple Pay, Paymob, Moyassar, and K-net.',
        'Leveraged advanced Figma workflows with Cursor MCP to translate UI/UX designs into production-ready Flutter interfaces.',
        'Designed scalable application architecture following Clean Architecture and SOLID principles.',
        'Improved application performance, resolved production bottlenecks, and enhanced runtime stability.',
        'Collaborated closely with product managers, backend engineers, and stakeholders to deliver production features efficiently.',
      ],
    },
    {
      role: 'Senior Flutter Developer',
      company: 'Adwat Information Technology',
      period: '05/2021 – 11/2023',
      location: 'Alexandria, Egypt',
      bullets: [
        'Led Flutter team development and conducted code reviews.',
        'Mentored team members through technical sessions twice weekly.',
        'Integrated authentication providers including Facebook, Google, Apple, and Twitter.',
        'Improved engineering communication between mobile, backend, and product teams.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Grandtk',
      period: '08/2020 – 05/2021',
      location: 'Alexandria, Egypt',
      bullets: [
        'Translated design mockups into pixel-perfect UI implementations, ensuring a smooth and visually appealing user experience.',
        'Implemented CI/CD pipelines to automate testing and deployment, reducing release cycles and improving efficiency.',
        'Took a leadership role in designing, developing, and maintaining high-quality Flutter applications.',
      ],
    },
    {
      role: 'Flutter Developer',
      company: 'Mostaql',
      period: '03/2020 – 06/2025',
      location: 'Remote',
      bullets: [
        'Utilized state management solutions (Provider, Bloc) to improve app performance and maintainability.',
        'Collaborated with clients worldwide, gathering requirements, providing technical consultations, and delivering high-quality applications within deadlines.',
        'Optimized app performance by reducing app size, improving load times, and fixing memory leaks.',
      ],
    },
  ],
};
