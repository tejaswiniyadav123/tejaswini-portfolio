import one from '../assets/svg/projects/one.svg';
import two from '../assets/svg/projects/two.svg';
import three from '../assets/svg/projects/three.svg';
import four from '../assets/svg/projects/four.svg';
import five from '../assets/svg/projects/five.svg';
import six from '../assets/svg/projects/six.svg';
import seven from '../assets/svg/projects/seven.svg';
import eight from '../assets/svg/projects/eight.svg';

export const projectsData = [
  {
    id: 1,
    projectName: 'Edge SHM & Defect Detection Platform',
    projectDesc:
      'Sensor fusion → PCA → Isolation Forest → YOLOv8 + SAHI for crack localization. Optimized for Snapdragon + SNPE.',
    tags: ['Python', 'YOLOv8', 'Raspberry Pi', 'SNPE', 'Kalman', 'SVM'],
    code: '',
    demo: '',
    image: one,
  },
  {
    id: 2,
    projectName: 'Lift Health Monitoring System',
    projectDesc:
      'Real-time sensor-based health monitoring using Raspberry Pi, Tkinter UI, DNN autoencoder + SVM for fault detection.',
    tags: ['Python', 'RPi', 'Tkinter', 'DNN', 'SVM'],
    code: '',
    demo: '',
    image: two,
  },
  {
    id: 3,
    projectName: 'EdgeYOLO – Real-Time Object Detection on Edge',
    projectDesc:
      'Optimized YOLOv8 deployment on edge hardware with low-latency inference. Integrated TensorRT & WinML pipeline.',
    tags: ['YOLOv8', 'TensorRT', 'Edge AI', 'C++', 'WinML'],
    code: '',
    demo: '',
    image: three,
  },
  {
    id: 4,
    projectName: 'Optical Character Recognition (OCR)',
    projectDesc:
      'Built a neural network-based OCR pipeline to extract and classify text from noisy images using CNNs and OpenCV.',
    tags: ['Python', 'CNN', 'TensorFlow', 'OpenCV'],
    code: '',
    demo: '',
    image: four,
  },
  {
    id: 5,
    projectName: 'Tree Crown Mapping in Satellite Images',
    projectDesc:
      'Used Circle Expression and Watershed algorithms to detect tree crowns in remote sensing data using QGIS + ML.',
    tags: ['QGIS', 'Python', 'OpenCV', 'ML', 'Remote Sensing'],
    code: '',
    demo: '',
    image: five,
  },
  {
    id: 6,
    projectName: 'Hybrid Energy Harvester',
    projectDesc:
      'Designed a hybrid piezo-electromagnetic energy harvester with intelligent switching using MSP430 and LTSpice.',
    tags: ['C', 'MSP430', 'LTSpice', 'Energy Harvesting'],
    code: '',
    demo: '',
    image: six,
  },
  {
    id: 7,
    projectName: 'GeeksforGeeks Article Series',
    projectDesc:
      'Authored 48+ articles on cybersecurity, networking, blockchain, and Linux internals.',
    tags: ['Linux', 'Cybersecurity', 'GFG', 'Blogging'],
    code: 'https://www.geeksforgeeks.org/user/tejaswipkle/contributions/',
    demo: '',
    image: seven,
  },
  {
    id: 8,
    projectName: 'Oscilloscope AI SDK – Tektronix',
    projectDesc:
      'Designed C++17 plug-in SDK for AI feature integration on MSO 5/6-Series scopes, including ONNX + TensorRT hot-swap.',
    tags: ['C++17', 'ONNX', 'TensorRT', 'Oscilloscopes', 'AI SDK'],
    code: '',
    demo: '',
    image: eight,
  },
];
