import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();
  const email = router.query.email || 'example@cptcr.cc';
  const password = router.query.password || 'password';

  const handleDownloadConfig = () => {
    const configText = `Mail Configuration
Username: ${email}
Password: ${password}

Incoming
URL: mail.cptcr.cc
IMAP Port: 993
POP3: 995

Outgoing
URL: mail.cptcr.cc
SMTP Port: 465

Attention: IMAP, POP3 and SMTP require authentication.

NON SSL/TSLS Settings (Not recommended)
Username: ${email}
Password: ${password}

Incoming Server: mail.cptcr.cc
IMAP Port: 143
POP3 Port: 110

Outgoing Server: mail.cptcr.cc
SMTP Port: 587

IMAP, POP3, and SMTP require authentication.`;

    const blob = new Blob([configText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mail-configuration.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl mb-4">Mail Configuration</h1>
        <p><strong>Username:</strong> {email}</p>
        <p><strong>Password:</strong> {password}</p>
        <h2 className="text-xl mt-4 mb-2">Incoming</h2>
        <p><strong>URL:</strong> mail.cptcr.cc</p>
        <p><strong>IMAP Port:</strong> 993</p>
        <p><strong>POP3 Port:</strong> 995</p>
        <h2 className="text-xl mt-4 mb-2">Outgoing</h2>
        <p><strong>URL:</strong> mail.cptcr.cc</p>
        <p><strong>SMTP Port:</strong> 465</p>
        <p className="mt-4"><strong>Attention:</strong> IMAP, POP3, and SMTP require authentication.</p>
        <h2 className="text-xl mt-4 mb-2">NON SSL/TSLS Settings (Not recommended)</h2>
        <p><strong>Username:</strong> {email}</p>
        <p><strong>Password:</strong> {password}</p>
        <p><strong>Incoming Server:</strong> mail.cptcr.cc</p>
        <p><strong>IMAP Port:</strong> 143</p>
        <p><strong>POP3 Port:</strong> 110</p>
        <p><strong>Outgoing Server:</strong> mail.cptcr.cc</p>
        <p><strong>SMTP Port:</strong> 587</p>
        <button
          onClick={handleDownloadConfig}
          className="w-full p-2 mt-4 bg-green-600 rounded hover:bg-green-700"
        >
          Download Configuration
        </button>
      </div>
    </div>
  );
}
