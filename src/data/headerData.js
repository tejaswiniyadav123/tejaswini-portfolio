import resume from '../assets/pdf/resume.pdf';
import Tejaswini_img from '../assets/svg/about/Tejaswini-image.png'; // ✅ Add this line (move image to `svg/about` if needed)

export const headerData = {
  name: 'Tejaswini Panchadarla',
  title: 'Team Lead – Embedded AI/ML | M.Tech, IIT Kharagpur',
  description:
    'AI/ML engineer passionate about embedded systems, signal processing, and on-device intelligence. Specialized in edge optimization, RTOS, and heterogeneous ML acceleration.',
  image: Tejaswini_img, // ✅ Use variable name (not a string or file path)
  resumePdf: resume
};
