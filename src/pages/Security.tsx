import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle2 } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-background py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-[hsl(var(--peacock-cyan))] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Policy
            </h1>
            <p className="text-lg text-gray-400 mb-2">
              Last Updated: November 2, 2025
            </p>
            <p className="text-gray-300">
              Our commitment to protecting your data and maintaining the highest security standards
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
              <h2 className="text-3xl font-bold text-white mb-4">1. Our Security Commitment</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At Opura AI, security is not just a feature—it's fundamental to everything we do. We implement industry-leading security practices to protect your data, maintain system integrity, and ensure business continuity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This Security Policy outlines our comprehensive approach to information security, data protection, and risk management. We continuously evolve our security measures to address emerging threats and maintain compliance with global security standards.
              </p>
            </div>

            {/* Security Framework */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">2. Security Framework & Standards</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Compliance & Certifications</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>ISO 27001:</strong> Information Security Management (in progress)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>SOC 2 Type II:</strong> Security, Availability, Confidentiality (planned)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>GDPR Compliant:</strong> European data protection standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>DPDP Act 2023:</strong> Indian data protection compliance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Security Standards</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>OWASP Top 10:</strong> Web application security best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>PCI DSS:</strong> Payment card data security (where applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>NIST Framework:</strong> Cybersecurity framework adherence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>CIS Controls:</strong> Critical security controls implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">3. Data Security Measures</h2>
              
              <div className="space-y-6">
                {/* Encryption */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Lock className="w-8 h-8 text-[hsl(var(--peacock-cyan))] flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3">3.1 Encryption</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Data in Transit</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li><strong className="text-white">TLS 1.3:</strong> Latest transport layer security protocol</li>
                            <li><strong className="text-white">Perfect Forward Secrecy:</strong> Unique session keys for each connection</li>
                            <li><strong className="text-white">HSTS:</strong> HTTP Strict Transport Security enforced</li>
                            <li><strong className="text-white">Certificate Pinning:</strong> Protection against MITM attacks</li>
                            <li><strong className="text-white">Strong Cipher Suites:</strong> Only secure, modern encryption algorithms</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Data at Rest</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li><strong className="text-white">AES-256:</strong> Military-grade encryption for stored data</li>
                            <li><strong className="text-white">Encrypted Databases:</strong> Full database encryption at volume level</li>
                            <li><strong className="text-white">Encrypted Backups:</strong> All backups encrypted before storage</li>
                            <li><strong className="text-white">Key Management:</strong> Hardware security modules (HSMs) for key storage</li>
                            <li><strong className="text-white">Encrypted File Systems:</strong> Operating system level encryption</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Encryption Key Management</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li>Automated key rotation every 90 days</li>
                            <li>Multi-party key generation and storage</li>
                            <li>Separate keys for different data classifications</li>
                            <li>Secure key backup and recovery procedures</li>
                            <li>Access logs for all key operations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Access Control */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="w-8 h-8 text-[hsl(var(--peacock-cyan))] flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3">3.2 Access Control & Authentication</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Multi-Factor Authentication (MFA)</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li>Required for all employee and admin accounts</li>
                            <li>Optional (but recommended) for customer accounts</li>
                            <li>Support for authenticator apps, SMS, and hardware tokens</li>
                            <li>Biometric authentication on supported devices</li>
                            <li>Backup codes for account recovery</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Role-Based Access Control (RBAC)</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li>Principle of least privilege enforced</li>
                            <li>Granular permissions based on job function</li>
                            <li>Regular access reviews and recertification</li>
                            <li>Automated access provisioning and deprovisioning</li>
                            <li>Separation of duties for critical operations</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Session Management</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li>Secure session token generation</li>
                            <li>Automatic session timeout after inactivity</li>
                            <li>Session invalidation on logout</li>
                            <li>Concurrent session limits</li>
                            <li>IP and device fingerprinting for anomaly detection</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Password Security</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li>Bcrypt hashing with high work factor</li>
                            <li>Minimum password complexity requirements</li>
                            <li>Password breach detection (HaveIBeenPwned integration)</li>
                            <li>Password history enforcement</li>
                            <li>Secure password reset with time-limited tokens</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">4. Infrastructure & Network Security</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Server className="w-8 h-8 text-[hsl(var(--peacock-cyan))] flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3">4.1 Cloud Infrastructure</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Cloud Security</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li><strong className="text-white">Cloud Provider:</strong> AWS/Google Cloud Platform (enterprise-grade infrastructure)</li>
                            <li><strong className="text-white">Multi-Region:</strong> Data redundancy across geographic regions</li>
                            <li><strong className="text-white">Virtual Private Cloud (VPC):</strong> Isolated network environments</li>
                            <li><strong className="text-white">Private Subnets:</strong> Database and application servers in private networks</li>
                            <li><strong className="text-white">DDoS Protection:</strong> Cloud-native DDoS mitigation services</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Network Security</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li><strong className="text-white">Firewalls:</strong> Next-generation firewall (NGFW) with IDS/IPS</li>
                            <li><strong className="text-white">WAF:</strong> Web Application Firewall (OWASP ruleset)</li>
                            <li><strong className="text-white">Network Segmentation:</strong> Micro-segmentation for zero-trust architecture</li>
                            <li><strong className="text-white">VPN:</strong> Encrypted VPN for remote employee access</li>
                            <li><strong className="text-white">Network Monitoring:</strong> 24/7 network traffic analysis</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Data Centers</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li>Tier III or higher certified data centers</li>
                            <li>Physical access controls and 24/7 surveillance</li>
                            <li>Environmental controls (temperature, humidity)</li>
                            <li>Redundant power and network connectivity</li>
                            <li>Regular physical security audits</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">5. Application Security</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Secure Development Lifecycle (SDL)</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">Security by Design:</strong> Security considerations from initial design phase</li>
                    <li><strong className="text-white">Threat Modeling:</strong> Regular threat modeling for new features</li>
                    <li><strong className="text-white">Code Reviews:</strong> Peer review and security-focused code reviews</li>
                    <li><strong className="text-white">Static Analysis:</strong> Automated static code analysis (SAST)</li>
                    <li><strong className="text-white">Dynamic Analysis:</strong> Runtime application security testing (DAST)</li>
                    <li><strong className="text-white">Dependency Scanning:</strong> Automated scanning for vulnerable dependencies</li>
                    <li><strong className="text-white">Container Security:</strong> Image scanning and runtime protection</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">OWASP Top 10 Protection</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Injection attack prevention (SQL, NoSQL, OS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Broken authentication protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Sensitive data exposure mitigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>XML External Entities (XXE) protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Broken access control prevention</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Security misconfiguration prevention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Cross-Site Scripting (XSS) protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Insecure deserialization protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Vulnerable components management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Insufficient logging & monitoring mitigation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">API Security</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">OAuth 2.0 / OpenID Connect:</strong> Industry-standard authentication</li>
                    <li><strong className="text-white">Rate Limiting:</strong> Protection against abuse and DoS attacks</li>
                    <li><strong className="text-white">API Keys:</strong> Secure key generation and rotation</li>
                    <li><strong className="text-white">Input Validation:</strong> Strict validation of all API inputs</li>
                    <li><strong className="text-white">API Versioning:</strong> Secure deprecation of old API versions</li>
                    <li><strong className="text-white">CORS Policy:</strong> Restrictive cross-origin resource sharing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Monitoring & Detection */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">6. Security Monitoring & Threat Detection</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">24/7 Security Operations Center (SOC)</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">SIEM:</strong> Security Information and Event Management system</li>
                    <li><strong className="text-white">Real-Time Monitoring:</strong> Continuous monitoring of systems and networks</li>
                    <li><strong className="text-white">Threat Intelligence:</strong> Integration with global threat intelligence feeds</li>
                    <li><strong className="text-white">Anomaly Detection:</strong> ML-based behavioral analysis</li>
                    <li><strong className="text-white">Automated Alerts:</strong> Immediate notification of security events</li>
                    <li><strong className="text-white">Incident Response:</strong> Dedicated security incident response team</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Logging & Audit Trails</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Comprehensive logging of all system activities</li>
                    <li>Immutable audit logs with cryptographic signatures</li>
                    <li>Centralized log aggregation and analysis</li>
                    <li>Minimum 1-year log retention (longer for compliance)</li>
                    <li>Regular audit log reviews</li>
                    <li>User activity monitoring and reporting</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Vulnerability Management</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">Automated Scanning:</strong> Weekly vulnerability scans</li>
                    <li><strong className="text-white">Penetration Testing:</strong> Annual third-party penetration testing</li>
                    <li><strong className="text-white">Bug Bounty Program:</strong> Responsible disclosure program (planned)</li>
                    <li><strong className="text-white">Patch Management:</strong> Critical patches within 48 hours</li>
                    <li><strong className="text-white">Risk Assessment:</strong> Regular risk assessments and remediation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Incident Response */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">7. Incident Response & Business Continuity</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-900/20 to-gray-800/50 border border-red-700/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3">Incident Response Plan</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Response Phases</h4>
                          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                            <li><strong className="text-white">Preparation:</strong> Trained response team, documented procedures, incident response tools</li>
                            <li><strong className="text-white">Detection & Analysis:</strong> Rapid identification and assessment of security incidents</li>
                            <li><strong className="text-white">Containment:</strong> Immediate containment to limit impact and prevent spread</li>
                            <li><strong className="text-white">Eradication:</strong> Remove threat and vulnerabilities from environment</li>
                            <li><strong className="text-white">Recovery:</strong> Restore systems and validate security</li>
                            <li><strong className="text-white">Post-Incident:</strong> Lessons learned and process improvement</li>
                          </ol>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Response Times</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li><strong className="text-white">Critical Incidents:</strong> Response within 1 hour</li>
                            <li><strong className="text-white">High Priority:</strong> Response within 4 hours</li>
                            <li><strong className="text-white">Medium Priority:</strong> Response within 24 hours</li>
                            <li><strong className="text-white">Low Priority:</strong> Response within 72 hours</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Communication</h4>
                          <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                            <li>Immediate notification to affected customers</li>
                            <li>Transparent communication about incident impact</li>
                            <li>Regular updates during incident resolution</li>
                            <li>Post-incident reports to stakeholders</li>
                            <li>Regulatory notification as required by law</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Business Continuity & Disaster Recovery</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">Backup Strategy:</strong> Automated daily backups, tested monthly</li>
                    <li><strong className="text-white">Geo-Redundancy:</strong> Data replicated across multiple geographic regions</li>
                    <li><strong className="text-white">Recovery Time Objective (RTO):</strong> Target of 4 hours for critical systems</li>
                    <li><strong className="text-white">Recovery Point Objective (RPO):</strong> Target of 1 hour data loss maximum</li>
                    <li><strong className="text-white">Failover Testing:</strong> Quarterly disaster recovery drills</li>
                    <li><strong className="text-white">Business Continuity Plan:</strong> Documented and regularly tested BCP</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Privacy & Protection */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">8. Data Privacy & Protection</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Data Classification</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="text-white font-semibold">Critical/Highly Sensitive</p>
                      <p className="text-gray-300 text-sm">Passwords, financial data, payment information, health data</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <p className="text-white font-semibold">Confidential</p>
                      <p className="text-gray-300 text-sm">PII, customer data, business secrets, internal communications</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-white font-semibold">Internal</p>
                      <p className="text-gray-300 text-sm">Employee data, internal documents, non-public information</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-white font-semibold">Public</p>
                      <p className="text-gray-300 text-sm">Marketing materials, public documentation, press releases</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Data Handling Principles</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">Data Minimization:</strong> Collect only necessary data</li>
                    <li><strong className="text-white">Purpose Limitation:</strong> Use data only for stated purposes</li>
                    <li><strong className="text-white">Storage Limitation:</strong> Retain data only as long as necessary</li>
                    <li><strong className="text-white">Accuracy:</strong> Maintain accurate and up-to-date data</li>
                    <li><strong className="text-white">Integrity & Confidentiality:</strong> Protect against unauthorized access</li>
                    <li><strong className="text-white">Accountability:</strong> Demonstrate compliance with data protection</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Privacy by Design</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Privacy considerations from initial design phase</li>
                    <li>Default privacy settings (opt-in, not opt-out)</li>
                    <li>Granular privacy controls for users</li>
                    <li>Privacy impact assessments for new features</li>
                    <li>Data anonymization and pseudonymization where possible</li>
                    <li>User rights (access, deletion, portability) built into systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">9. Third-Party & Vendor Security</h2>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Vendor Risk Management</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><strong className="text-white">Due Diligence:</strong> Security assessment before vendor onboarding</li>
                  <li><strong className="text-white">Contractual Obligations:</strong> Data protection clauses in all vendor contracts</li>
                  <li><strong className="text-white">Regular Audits:</strong> Periodic security reviews of critical vendors</li>
                  <li><strong className="text-white">Data Processing Agreements:</strong> GDPR-compliant DPAs with all processors</li>
                  <li><strong className="text-white">Vendor Monitoring:</strong> Ongoing monitoring of vendor security posture</li>
                  <li><strong className="text-white">Exit Planning:</strong> Secure data return/deletion procedures</li>
                </ul>
              </div>
            </div>

            {/* Employee Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">10. Employee Security & Training</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Security Awareness Training</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">Onboarding:</strong> Mandatory security training for all new employees</li>
                    <li><strong className="text-white">Annual Training:</strong> Yearly refresher courses on security best practices</li>
                    <li><strong className="text-white">Phishing Simulations:</strong> Regular simulated phishing campaigns</li>
                    <li><strong className="text-white">Specialized Training:</strong> Role-specific security training</li>
                    <li><strong className="text-white">Security Champions:</strong> Security advocate program in each team</li>
                    <li><strong className="text-white">Continuous Education:</strong> Regular security updates and newsletters</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">HR Security Controls</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">Background Checks:</strong> Pre-employment screening for all employees</li>
                    <li><strong className="text-white">NDA & Confidentiality:</strong> Signed agreements for all personnel</li>
                    <li><strong className="text-white">Access Provisioning:</strong> Formal onboarding and access request process</li>
                    <li><strong className="text-white">Access Revocation:</strong> Immediate access removal upon termination</li>
                    <li><strong className="text-white">Exit Interviews:</strong> Return of company assets and data</li>
                    <li><strong className="text-white">Acceptable Use Policy:</strong> Clear guidelines for system and data use</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Physical Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">11. Physical Security</h2>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><strong className="text-white">Office Access:</strong> Badge-controlled access to facilities</li>
                  <li><strong className="text-white">Visitor Management:</strong> Escort requirement for all visitors</li>
                  <li><strong className="text-white">Video Surveillance:</strong> 24/7 monitoring of critical areas</li>
                  <li><strong className="text-white">Clean Desk Policy:</strong> No sensitive information left unattended</li>
                  <li><strong className="text-white">Secure Disposal:</strong> Shredding of physical documents, secure e-waste disposal</li>
                  <li><strong className="text-white">Equipment Security:</strong> Laptop encryption, screen privacy filters</li>
                </ul>
              </div>
            </div>

            {/* Compliance & Auditing */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">12. Compliance & Security Auditing</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Regular Audits</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li><strong className="text-white">Internal Audits:</strong> Quarterly internal security audits</li>
                    <li><strong className="text-white">External Audits:</strong> Annual third-party security assessments</li>
                    <li><strong className="text-white">Compliance Audits:</strong> Regular compliance validation (GDPR, DPDP, etc.)</li>
                    <li><strong className="text-white">Penetration Testing:</strong> Annual comprehensive pen tests</li>
                    <li><strong className="text-white">Code Audits:</strong> Security code reviews for critical components</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Continuous Improvement</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Regular review and update of security policies</li>
                    <li>Adoption of emerging security technologies</li>
                    <li>Participation in security communities and forums</li>
                    <li>Tracking of security metrics and KPIs</li>
                    <li>Post-incident reviews and process improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Responsible Disclosure */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">13. Responsible Disclosure</h2>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  We welcome security researchers and ethical hackers to report vulnerabilities responsibly.
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">How to Report</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                  <li>Email: <a href="mailto:security@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">security@opura.ai</a></li>
                  <li>Provide detailed description of the vulnerability</li>
                  <li>Include steps to reproduce the issue</li>
                  <li>Allow us reasonable time to address before public disclosure</li>
                  <li>Do not exploit the vulnerability or access customer data</li>
                </ul>
                <h3 className="text-xl font-semibold text-white mb-3">Our Commitment</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Acknowledge receipt within 24 hours</li>
                  <li>Provide regular updates on remediation progress</li>
                  <li>Credit responsible researchers (with permission)</li>
                  <li>No legal action for good-faith security research</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">14. Security Contact</h2>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  For security-related inquiries, vulnerability reports, or security concerns:
                </p>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <strong className="text-white">Security Team:</strong> <a href="mailto:security@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">security@opura.ai</a>
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">General Inquiries:</strong> <a href="mailto:contactus@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">contactus@opura.ai</a>
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Data Protection Officer:</strong> <a href="mailto:dpo@opura.ai" className="text-[hsl(var(--peacock-cyan))] hover:underline">dpo@opura.ai</a>
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Response Time:</strong> Security issues acknowledged within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">15. Policy Updates</h2>
              <p className="text-gray-300 leading-relaxed">
                This Security Policy is reviewed and updated regularly to reflect changes in our security practices, technology, regulations, and industry standards. Material changes will be communicated to customers via email and posted on our website.
              </p>
            </div>

            {/* Related Policies */}
            <div className="border-t border-gray-700 pt-8 mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">Related Policies</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/privacy" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors">
                  Cookie Policy
                </Link>
              </div>
              <p className="text-center text-gray-400">
                <Link to="/" className="text-[hsl(var(--peacock-cyan))] hover:underline text-lg">Return to Home</Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;