import nortion from "../assets/nortion.png";
import mcafee from "../assets/mcafee.png";
import bitdefender from "../assets/bitdefender.png";
import avast from "../assets/avast.png";
import eset from "../assets/eset.png";
import avira from "../assets/avira.png";

export const antiviruses = [
    {
        id: 1,
        name: "Norton 360 Deluxe",
        logo: nortion,
        rating: 4.8,
        reviews: 12500,
        features: [
            "Real-time Threat Protection",
            "Secure VPN (No-Log)",
            "Dark Web Monitoring",
            "50GB Cloud Backup",
            "Password Manager"
        ],
        price: "$49.99 / year",
        originalPrice: "$104.99 / year",
        discount: "Up to 52% OFF",
        link: "https://www.norton.com/products/norton-360-deluxe"
    },
    {
        id: 2,
        name: "McAfee Total Protection",
        logo: mcafee,
        rating: 4.7,
        reviews: 10200,
        features: [
            "Real-Time Antivirus Protection",
            "Identity Theft Monitoring",
            "Secure VPN",
            "Password Manager",
            "Firewall Protection"
        ],
        price: "$39.99 / year",
        originalPrice: "$99.99 / year",
        discount: "Up to 60% OFF",
        link: "https://www.mcafee.com/en-us/antivirus.html"
    },
    {
        id: 3,
        name: "Bitdefender Total Security",
        logo: bitdefender,
        rating: 4.9,
        reviews: 9800,
        features: [
            "Advanced Threat Defense",
            "Multi-Layer Ransomware Protection",
            "Webcam & Microphone Protection",
            "Parental Controls",
            "Anti-Phishing & Fraud Protection"
        ],
        price: "$44.99 / year",
        originalPrice: "$94.99 / year",
        discount: "Up to 53% OFF",
        link: "https://www.bitdefender.com/solutions/total-security.html"
    },
    {
        id: 4,
        name: "Avast Premium Security",
        logo: avast,
        rating: 4.6,
        reviews: 15000,
        features: [
            "Real-Time Malware Protection",
            "Advanced Firewall",
            "Ransomware Shield",
            "Webcam Protection",
            "Fake Website Protection"
        ],
        price: "$69.99 / year",
        originalPrice: "$89.99 / year",
        discount: "Up to 22% OFF",
        link: "https://www.avast.com/premium-security"
    },
    {
        id: 5,
        name: "ESET Internet Security",
        logo: eset,
        rating: 4.7,
        reviews: 7200,
        features: [
            "Advanced Antivirus & Antispyware",
            "Network Attack Protection",
            "Banking & Payment Protection",
            "Anti-Theft Tools",
            "Low System Impact"
        ],
        price: "$49.99 / year",
        originalPrice: "$69.99 / year",
        discount: "Up to 29% OFF",
        link: "https://www.eset.com/int/home/internet-security/"
    },
    {
        id: 6,
        name: "Avira Prime",
        logo: avira,
        rating: 4.5,
        reviews: 8900,
        features: [
            "Real-Time Malware Protection",
            "Unlimited VPN",
            "System Speed Optimizer",
            "Password Manager",
            "PC Cleaner"
        ],
        price: "$59.99 / year",
        originalPrice: "$99.99 / year",
        discount: "Up to 40% OFF",
        link: "https://www.avira.com/en/avira-prime"
    }
];
