import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-background py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-400">
              Last Updated: November 2, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This Cookie Policy explains how Opura AI ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website at opura.ai and use our Services. This policy should be read together with our <Link to="/privacy" className="text-[hsl(var(--peacock-cyan))] hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By continuing to use our website and Services, you consent to our use of cookies as described in this policy.
              </p>
            </div>

            {/* What Are Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cookie Components:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><strong className="text-white">Name:</strong> Unique identifier for the cookie</li>
                  <li><strong className="text-white">Value:</strong> Data stored by the cookie</li>
                  <li><strong className="text-white">Domain:</strong> Website that placed the cookie</li>
                  <li><strong className="text-white">Expiration:</strong> When the cookie will be deleted</li>
                  <li><strong className="text-white">Security:</strong> Whether the cookie is encrypted</li>
                </ul>
              </div>
            </div>

            {/* Types of Cookies We Use */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">3.1 Essential Cookies</h3>
                    <span className="px-3 py-1 bg-red-900/30 text-red-400 text-xs font-semibold rounded-full">Required</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400"><strong className="text-white">Purpose:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>Authentication and security</li>
                      <li>Session management</li>
                      <li>Load balancing</li>
                      <li>Form submission</li>
                      <li>Security and fraud prevention</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Examples:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">session_id</code> - Maintains your login session</li>
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">csrf_token</code> - Prevents cross-site request forgery</li>
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">load_balancer</code> - Distributes traffic across servers</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Duration:</strong> Session or up to 24 hours</p>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">3.2 Functional Cookies</h3>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or third-party providers whose services we use.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400"><strong className="text-white">Purpose:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>Remember user preferences</li>
                      <li>Language selection</li>
                      <li>Region/location settings</li>
                      <li>Custom interface settings</li>
                      <li>Previously viewed content</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Examples:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">user_preferences</code> - Stores your preferences</li>
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">language</code> - Remembers language choice</li>
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">theme</code> - Saves light/dark mode preference</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Duration:</strong> 30 days to 1 year</p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">3.3 Analytics Cookies</h3>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and Services.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400"><strong className="text-white">Purpose:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>Understand user behavior and patterns</li>
                      <li>Measure website performance</li>
                      <li>Count visitors and traffic sources</li>
                      <li>Test new features</li>
                      <li>Identify popular content</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Third-Party Services:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li><strong className="text-white">Google Analytics:</strong> Tracks website usage and behavior</li>
                      <li><strong className="text-white">Mixpanel:</strong> Product analytics and user tracking</li>
                      <li><strong className="text-white">Hotjar:</strong> Heatmaps and session recordings</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Examples:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">_ga</code> - Google Analytics identifier</li>
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">_gid</code> - Google Analytics session identifier</li>
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">mp_*</code> - Mixpanel tracking cookies</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Duration:</strong> 24 hours to 2 years</p>
                  </div>
                </div>

                {/* Marketing/Advertising Cookies */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">3.4 Marketing/Advertising Cookies</h3>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies are used to track visitors across websites to display ads that are relevant and engaging. They may also be used to limit the number of times you see an ad and measure the effectiveness of advertising campaigns.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400"><strong className="text-white">Purpose:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>Deliver relevant advertisements</li>
                      <li>Limit ad frequency (frequency capping)</li>
                      <li>Measure ad campaign effectiveness</li>
                      <li>Retargeting and remarketing</li>
                      <li>Build user profiles for advertising</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Third-Party Networks:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li><strong className="text-white">Google Ads:</strong> Display advertising network</li>
                      <li><strong className="text-white">Facebook Pixel:</strong> Social media advertising</li>
                      <li><strong className="text-white">LinkedIn Insight Tag:</strong> Professional network advertising</li>
                      <li><strong className="text-white">Twitter Pixel:</strong> Social media advertising</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Examples:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">_fbp</code> - Facebook Pixel</li>
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">IDE</code> - Google DoubleClick</li>
                      <li><code className="bg-gray-900 px-2 py-1 rounded text-xs">li_sugr</code> - LinkedIn tracking</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Duration:</strong> 30 days to 2 years</p>
                  </div>
                </div>

                {/* Performance Cookies */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">3.5 Performance Cookies</h3>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies collect information about how you use our website, such as which pages you visit most often and any error messages you receive. All information collected is aggregated and anonymous.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400"><strong className="text-white">Purpose:</strong></p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>Monitor website performance</li>
                      <li>Identify and fix errors</li>
                      <li>Optimize page load times</li>
                      <li>Improve user experience</li>
                      <li>A/B testing and experiments</li>
                    </ul>
                    <p className="text-gray-400 mt-3"><strong className="text-white">Duration:</strong> Session to 1 year</p>
                  </div>
                </div>
              </div>
            </div>

            {/* First-Party vs Third-Party Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">4. First-Party vs. Third-Party Cookies</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">First-Party Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    Cookies set directly by Opura AI when you visit our website.
                  </p>
                  <p className="text-gray-400 text-sm mb-2"><strong className="text-white">Used for:</strong></p>
                  <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
                    <li>Core website functionality</li>
                    <li>User authentication</li>
                    <li>Preferences and settings</li>
                    <li>Basic analytics</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Third-Party Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    Cookies set by external services we use (analytics, advertising, social media).
                  </p>
                  <p className="text-gray-400 text-sm mb-2"><strong className="text-white">Used for:</strong></p>
                  <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
                    <li>Advanced analytics</li>
                    <li>Advertising and retargeting</li>
                    <li>Social media integration</li>
                    <li>Payment processing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Other Tracking Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">5. Other Tracking Technologies</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Web Beacons / Pixel Tags</h3>
                  <p className="text-gray-300">
                    Small graphic images embedded in web pages or emails that track whether a page has been viewed or an email opened. Used for analytics and email marketing.
                  </p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Local Storage</h3>
                  <p className="text-gray-300">
                    Browser storage that allows websites to store larger amounts of data locally. Used for caching, preferences, and offline functionality.
                  </p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Session Storage</h3>
                  <p className="text-gray-300">
                    Temporary storage that is cleared when the browser tab is closed. Used for session-specific data like form inputs.
                  </p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">ETags</h3>
                  <p className="text-gray-300">
                    HTTP response headers used for caching and identifying specific versions of resources. Helps improve website performance.
                  </p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">SDKs and APIs</h3>
                  <p className="text-gray-300">
                    Software development kits and application programming interfaces that may collect data when integrated into our Services.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Manage Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">6. How to Manage Cookies</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Cookie Consent Manager</h3>
              <p className="text-gray-300 mb-6">
                When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">Browser Settings</h3>
              <p className="text-gray-300 mb-4">
                Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
              </p>

              <div className="space-y-3 mb-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Google Chrome</h4>
                  <p className="text-gray-300 text-sm">Settings → Privacy and security → Cookies and other site data</p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Mozilla Firefox</h4>
                  <p className="text-gray-300 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Safari</h4>
                  <p className="text-gray-300 text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Microsoft Edge</h4>
                  <p className="text-gray-300 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Opt-Out Tools</h3>
              <p className="text-gray-300 mb-4">
                You can opt out of certain third-party cookies using these tools:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li><strong className="text-white">Network Advertising Initiative (NAI):</strong> <a href="http://www.networkadvertising.org/choices/" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">www.networkadvertising.org/choices/</a></li>
                <li><strong className="text-white">Digital Advertising Alliance (DAA):</strong> <a href="http://www.aboutads.info/choices/" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices/</a></li>
                <li><strong className="text-white">European Interactive Digital Advertising Alliance (EDAA):</strong> <a href="http://www.youronlinechoices.eu/" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">www.youronlinechoices.eu/</a></li>
                <li><strong className="text-white">Google Analytics Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
              </ul>

              <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6">
                <p className="text-yellow-200">
                  <strong>⚠️ Important:</strong> Blocking or deleting cookies may impact your experience on our website. Some features may not function properly, and you may need to re-enter your preferences.
                </p>
              </div>
            </div>

            {/* Do Not Track */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Do Not Track (DNT)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some browsers have a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals.
              </p>
              <p className="text-gray-300 leading-relaxed">
                At this time, our website does not respond to DNT signals. However, you can still control cookies through your browser settings and our cookie consent manager.
              </p>
            </div>

            {/* Mobile Devices */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">8. Mobile Devices and Apps</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you use our mobile apps or access our website from a mobile device, we may collect similar information through mobile-specific technologies:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li><strong className="text-white">Device Identifiers:</strong> Unique identifiers like IDFA (iOS) or Advertising ID (Android)</li>
                <li><strong className="text-white">Location Data:</strong> With your permission, GPS or IP-based location</li>
                <li><strong className="text-white">App Analytics:</strong> Usage patterns and crash reports</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You can manage these settings through your device's privacy settings (iOS: Settings → Privacy; Android: Settings → Google → Ads).
              </p>
            </div>

            {/* Cookie Duration */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">9. Cookie Duration and Expiration</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Session Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    Temporary cookies that are deleted when you close your browser.
                  </p>
                  <p className="text-gray-400 text-sm">Duration: Until browser is closed</p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Persistent Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    Cookies that remain on your device for a set period or until you delete them.
                  </p>
                  <p className="text-gray-400 text-sm">Duration: Varies (24 hours to 2 years depending on type)</p>
                </div>
              </div>

              <div className="mt-6 bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Typical Retention Periods</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">Essential cookies:</strong> Session to 24 hours</li>
                  <li>• <strong className="text-white">Functional cookies:</strong> 30 days to 1 year</li>
                  <li>• <strong className="text-white">Analytics cookies:</strong> 24 hours to 2 years</li>
                  <li>• <strong className="text-white">Marketing cookies:</strong> 30 days to 2 years</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Cookie List */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">10. Third-Party Services and Their Cookies</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-white border-b border-gray-700">Service</th>
                      <th className="px-4 py-3 text-left text-white border-b border-gray-700">Purpose</th>
                      <th className="px-4 py-3 text-left text-white border-b border-gray-700">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 text-sm">
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3">Google Analytics</td>
                      <td className="px-4 py-3">Website analytics</td>
                      <td className="px-4 py-3">
                        <a href="https://policies.google.com/privacy" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3">Google Ads</td>
                      <td className="px-4 py-3">Advertising</td>
                      <td className="px-4 py-3">
                        <a href="https://policies.google.com/privacy" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3">Facebook Pixel</td>
                      <td className="px-4 py-3">Advertising & analytics</td>
                      <td className="px-4 py-3">
                        <a href="https://www.facebook.com/privacy/policy/" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3">LinkedIn Insight</td>
                      <td className="px-4 py-3">Advertising & analytics</td>
                      <td className="px-4 py-3">
                        <a href="https://www.linkedin.com/legal/privacy-policy" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3">Mixpanel</td>
                      <td className="px-4 py-3">Product analytics</td>
                      <td className="px-4 py-3">
                        <a href="https://mixpanel.com/legal/privacy-policy/" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Hotjar</td>
                      <td className="px-4 py-3">Heatmaps & recordings</td>
                      <td className="px-4 py-3">
                        <a href="https://www.hotjar.com/legal/policies/privacy/" className="text-[hsl(var(--peacock-cyan))] hover:underline" target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Updates to Cookie Policy */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">11. Updates to This Cookie Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our business operations, or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When we make material changes, we will notify you by updating the "Last Updated" date at the top of this policy and may provide additional notice (such as a banner on our website or email notification).
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">12. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Email:</strong> <a href="mailto:contactus@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">contactus@opura.ai</a>
                </p>
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Privacy Inquiries:</strong> <a href="mailto:privacy@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">privacy@opura.ai</a>
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Mail:</strong> Opura AI, Bengaluru, India
                </p>
              </div>
            </div>

            {/* Related Policies */}
            <div className="border-t border-gray-700 pt-8 mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">Related Policies</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/privacy" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors">
                  Terms of Service
                </Link>
                <Link to="/security" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors">
                  Security Policy
                </Link>
              </div>
              <p className="text-center text-gray-400 mt-8">
                <Link to="/" className="text-[hsl(var(--peacock-cyan))] hover:underline">Return to Home</Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;