const positions = [
  {
    company: 'TikTok (ByteDance)',
    position: 'Software Engineer II, Growth & CRM Platform',
    link: 'https://www.tiktok.com/',
    daterange: 'Oct 2024 - Present',
    points: [
      'Built the Lead Intelligence Pool, unifying 19M+ records from 5 external data sources into a 360-degree Total Addressable Market view. Supplied 740K+ high-revenue leads in Q3 (280% of target), directly accelerating sales pipeline and conversion.',
      'Designed a full-lifecycle Marketing Hub with audience segmentation, personalized email campaigns (200 QPS via RocketMQ), and campaign-member-level metric tracking (open rates, CTR, unsubscribe), enabling data-driven optimization across cross-functional marketing and sales teams.',
      'Implemented automated Double Opt-In compliance workflow for the DACH region with scheduled cronjobs and lifecycle state management, driving a 2,172% increase in compliant leads and 250% increase in conversions.',
      'Built Spark ETL pipelines with custom Java UDFs and an LLM-based classification service for intelligent lead enrichment, entity matching, and priority-based field merging.',
      'Architected an LLM-powered ReAct agent in Go (Eino framework) that autonomously researches companies via 4 integrated tools (web search, SERP analysis, keyword research, contact discovery). Built dual transports (Kitex RPC + HTTP+SSE via AG-UI protocol) with streaming responses, multi-turn state management, and full observability.',
      'Optimized Elasticsearch queries reducing P99 latency from 5s to 2.7s. Completed 78 code reviews with 101 valid comments. Spearheaded observability improvements by implementing access logs across all 8 backend services.',
    ],
  },
  {
    company: 'Hughes Network Systems',
    position: 'Software Engineer',
    link: 'https://www.hughes.com/',
    daterange: 'Jan 2024 - Oct 2024',
    points: [
      'Developed critical gateway software for in-flight connectivity (Delta/Spirit Airlines) using C++ and Linux. Engineered a distributed performance monitoring module to dynamically manage demand queues and enforce SLAs under network congestion.',
      'Designed a multi-threaded command interface using Kafka and Dockerized Zookeeper to manage real-time updates for 55,000 aero terminals, implementing SSL encryption for secure data transmission.',
    ],
  },
];

export default positions;
