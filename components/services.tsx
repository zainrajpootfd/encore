// "use client"

// import { DollarSign, Clipboard, RotateCw, Target, Users } from "lucide-react"

// const services = [
//   {
//     icon: DollarSign,
//     title: "Revenue Cycle Management",
//     description: "End-to-end revenue cycle optimization to maximize your collections.",
//   },
//   {
//     icon: Clipboard,
//     title: "Medical Billing Services",
//     description: "Expert billing services with HIPAA compliance and accuracy.",
//   },
//   {
//     icon: RotateCw,
//     title: "A/R Recovery Analysis",
//     description: "Comprehensive analysis and recovery of outstanding accounts receivable.",
//   },
//   {
//     icon: Target,
//     title: "Practice Management Software",
//     description: "Integrated software solutions for efficient practice operations.",
//   },
//   {
//     icon: Users,
//     title: "MedCare Force",
//     description: "Dedicated team of billing specialists for your practice.",
//   },
// ]

// export default function Services() {
//   return (
//     <section className="py-20 lg:py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             MedCare offers efficient solutions tailored to your practice's unique needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//           {services.map((service, idx) => {
//             const Icon = service.icon
//             return (
//               <div
//                 key={service.title}
//                 className="p-6 bg-gray-50 rounded-xl hover:shadow-lg hover:bg-white transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-fade-in-up"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors hover:scale-110 hover:rotate-5">
//                   <Icon className="text-primary" size={24} />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
//                 <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
//                 <a
//                   href="#"
//                   className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1 hover:translate-x-1 transition-transform"
//                 >
//                   Learn More →
//                 </a>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DollarSign, Clipboard, RotateCw, Target, Users } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description:
      "End-to-end revenue cycle optimization to maximize your collections.",
  },
  {
    icon: Clipboard,
    title: "Medical Billing Services",
    description: "Expert billing services with HIPAA compliance and accuracy.",
  },
  {
    icon: RotateCw,
    title: "A/R Recovery Analysis",
    description:
      "Comprehensive analysis and recovery of outstanding accounts receivable.",
  },
  {
    icon: Target,
    title: "Practice Management Software",
    description:
      "Integrated software solutions for efficient practice operations.",
  },
  {
    icon: Users,
    title: "MedCare Force",
    description: "Dedicated team of billing specialists for your practice.",
  },
];

export default function Services() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="h-[40rem] md:min-h-[70rem] flex items-center justify-center relative pt-20 md:p-20 "
    >
      <div className="w-full relative" style={{ perspective: "1000px" }}>
        <motion.div
          style={{ translateY: translate, opacity }}
          className="text-center mb-2 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Encore Billing Group offers efficient solutions tailored to your
            practice's unique needs
          </p>
        </motion.div>

        <motion.div
          style={{
            rotateX: rotate,
            scale,
            opacity,
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a",
          }}
          className="max-w-6xl mx-auto h-[35rem] md:h-[45rem] w-full border-4 border-yellow-200 p-6 bg-blue-100 rounded-[30px] shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full  overflow-hidden rounded-2xl p-6 bg-green-100">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit hover:bg-primary/20 transition-all">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1 hover:translate-x-1 transition-transform"
                  >
                    Learn More →
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
