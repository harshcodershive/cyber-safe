import phishingAttack from "../assets/phishingAttack.jpg"
import ransomware from "../assets/ransomware.jpg"

export const guides = [
    {
        id: 1,
        title: "Understanding Malware: A Beginner's Guide",
        excerpt: "Learn what malware is, how it spreads, and the different types of malicious software you need to watch out for.",
        category: "Guide",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        readTime: "5 min read",
        link: "/resource/1",
        content: `
            <p>Malware, short for malicious software, is an umbrella term used to refer to a variety of hostile or intrusive software, including computer viruses, worms, Trojan horses, ransomware, spyware, adware, scareware, and other malicious programs. It can take the form of executable code, scripts, active content, and other software.</p>
            
            <h3>Types of Malware</h3>
            <p>1. <strong>Viruses:</strong> A virus is a type of malware that propagates by inserting a copy of itself into and becoming part of another program. It spreads from one computer to another, leaving infections as it travels.</p>
            <p>2. <strong>Worms:</strong> Worms are similar to viruses in that they replicate existing files on their own. However, worms create files of their own, whereas viruses infect existing files. They can spread through networks and cause severe damage.</p>
            <p>3. <strong>Trojan Horses:</strong> Named after the Greek myth, a Trojan horse is a type of malware that disguises itself as legitimate software. Users are tricked into loading and executing it on their systems.</p>
            <p>4. <strong>Ransomware:</strong> This is a type of malware that blocks access to a computer system or data, usually by encrypting it, until the victim pays a fee to the attacker.</p>
            
            <h3>How Malware Spreads</h3>
            <p>Malware spreads through various means, including malicious email attachments (phishing), infected software downloads, compromised websites, and even physical media like USB drives. Cybercriminals are constantly evolving their tactics to bypass security measures.</p>
            
            <h3>Protecting Yourself</h3>
            <p>To protect yourself from malware, it is crucial to use reputable antivirus software, keep your operating system and applications updated, avoid clicking on suspicious links or downloading attachments from unknown sources, and back up your data regularly.</p>
        `
    },
    {
        id: 2,
        title: "Phishing Attacks: How to Spot and Avoid Them",
        excerpt: "Phishing is one of the most common cyber threats. Discover the signs of a phishing attempt and how to protect yourself.",
        category: "Security Tip",
        image: phishingAttack,
        readTime: "7 min read",
        link: "/resource/2",
        content: `
            <p>Phishing is a cybercrime in which a target or targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data such as personally identifiable information, banking and credit card details, and passwords.</p>
            
            <h3>Common Signs of Phishing</h3>
            <p>1. <strong>Suspicious Sender Address:</strong> Often, the sender's email address doesn't match the company they claim to represent. Look for slight misspellings or domains that don't make sense.</p>
            <p>2. <strong>Generic Greetings:</strong> Phishing emails often use generic greetings like "Dear Customer" instead of your name.</p>
            <p>3. <strong>Urgency and Threats:</strong> Emails that demand immediate action or threaten negative consequences (like account suspension) are often phishing attempts designed to make you panic and act without thinking.</p>
            <p>4. <strong>Suspicious Links and Attachments:</strong> Hover over links to see the actual URL before clicking. Be wary of unsolicited attachments.</p>
            
            <h3>How to Protect Yourself</h3>
            <p>Never provide sensitive information via email. If you receive a suspicious email from a company, contact them directly using a verified phone number or website to verify the request. Enable Two-Factor Authentication (2FA) on your accounts to add an extra layer of security.</p>
        `
    },
    {
        id: 3,
        title: "Ransomware Explained",
        excerpt: "What is ransomware, and why is it so dangerous? We explain how this threat works and how to prevent it.",
        category: "Guide",
        image: ransomware,
        readTime: "6 min read",
        link: "/resource/3",
        content: `
            <p>Ransomware is a type of malicious software that threatens to publish the victim's data or perpetually block access to it unless a ransom is paid. It is one of the most financially damaging cyber threats facing individuals and businesses today.</p>
            
            <h3>How Ransomware Works</h3>
            <p>Ransomware typically enters a system through a phishing email or a vulnerability in the network. Once inside, it encrypts files, making them inaccessible. The attacker then displays a ransom note demanding payment, usually in cryptocurrency, in exchange for the decryption key.</p>
            
            <h3>Why is it Dangerous?</h3>
            <p>Aside from the financial cost of the ransom, victims often face significant downtime, data loss, and damage to their reputation. There is also no guarantee that paying the ransom will result in the restoration of data.</p>
            
            <h3>Prevention Strategies</h3>
            <p>1. <strong>Regular Backups:</strong> Keep offline backups of your data. If you are infected, you can restore your system without paying the ransom.</p>
            <p>2. <strong>Update Software:</strong> Patching software vulnerabilities prevents attackers from exploiting them to install ransomware.</p>
            <p>3. <strong>Security Training:</strong> Educate yourself and your employees about the dangers of phishing and safe browsing habits.</p>
        `
    }
];

export const blogs = [
    {
        id: 1,
        title: "Top Cybersecurity Trends for 2026",
        excerpt: "From AI-driven attacks to quantum cryptography, here are the biggest trends shaping the future of digital security.",
        date: "Jan 5, 2026",
        author: "Safety Team",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        link: "/blog/1",
        content: `
            <p>As we move further into 2026, the cybersecurity landscape continues to evolve at a rapid pace. Cybercriminals are adopting new technologies, and defenders must innovate to keep up. Here are the top trends defining the year.</p>
            
            <h3>1. AI-Driven Attacks</h3>
            <p>Artificial Intelligence is being used by both attackers and defenders. Cybercriminals are utilizing AI to automate phishing attacks, create deepfakes for social engineering, and identify vulnerabilities faster than ever.</p>
            
            <h3>2. Quantum Cryptography</h3>
            <p>With the rise of quantum computing, traditional encryption methods are at risk. In 2026, we are seeing a major push towards post-quantum cryptography to secure data against future threats.</p>
            
            <h3>3. IoT Security Challenges</h3>
            <p>The proliferation of Internet of Things (IoT) devices continues to expand the attack surface. Securing smart homes, medical devices, and industrial control systems remains a top priority.</p>
            
            <h3>4. Zero Trust Architecture</h3>
            <p>The "never trust, always verify" model is becoming the standard. Organizations are moving away from perimeter-based security to a model where every access request is authenticated and authorized.</p>
            
            <p>Staying ahead of these trends requires continuous learning and adaptation. Whether you are an individual or an organization, prioritizing cybersecurity is essential in 2026.</p>
        `
    },
    {
        id: 2,
        title: "Why You Need a Password Manager in 2026",
        excerpt: "Stop reusing passwords. A password manager is the easiest way to secure your online accounts. Here's why.",
        date: "Jan 1, 2026",
        author: "Alex Security",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
        link: "/blog/2",
        content: `
            <p>In 2026, the average internet user has over 100 online accounts. Remembering a unique, strong password for each one is humanly impossible. This is where a password manager comes in.</p>
            
            <h3>The Risks of Password Reuse</h3>
            <p>Many people use the same password for multiple sites. If one site suffers a data breach, attackers can use those credentials to access your other accounts (a technique known as credential stuffing).</p>
            
            <h3>How a Password Manager Helps</h3>
            <p>A password manager generates and stores strong, unique passwords for every account. You only need to remember one master password. It autofills your credentials, making logging in faster and more secure.</p>
            
            <h3>Key Features to Look For</h3>
            <ul>
                <li><strong>Zero-Knowledge Encryption:</strong> Ensures that only you can access your data.</li>
                <li><strong>Cross-Platform Sync:</strong> Access your passwords on your phone, computer, and tablet.</li>
                <li><strong>Two-Factor Authentication:</strong> Adds an extra layer of security to your vault.</li>
            </ul>
            
            <p>Using a password manager is one of the simplest and most effective steps you can take to improve your digital security instantly.</p>
        `
    }
];
