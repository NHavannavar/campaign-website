import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram, Mail, Calendar, Users, Heart, Award, Briefcase, MapPin, Phone } from 'lucide-react';

export default function NaveenWebsite() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    { url: 'https://via.placeholder.com/800x600/1e40af/ffffff?text=Town+Hall', alt: 'Town Hall' },
    { url: 'https://via.placeholder.com/800x600/2563eb/ffffff?text=Community', alt: 'Community' },
    { url: 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Residents', alt: 'Residents' },
    { url: 'https://via.placeholder.com/800x600/60a5fa/ffffff?text=Meeting', alt: 'Meeting' }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">NAVEEN HAVANNAVAR</div>
            <div className="flex items-center gap-6 text-sm font-semibold">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">About</button>
              <button onClick={() => scrollToSection('priorities')} className="hover:text-blue-600 transition">Priorities</button>
              <button onClick={() => scrollToSection('town-work')} className="hover:text-blue-600 transition">Town Board</button>
              <button onClick={() => scrollToSection('updates')} className="hover:text-blue-600 transition">Updates</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition">Contact</button>
              <a href="https://secure.actblue.com/donate/friendsofnaveen" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700">DONATE</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                ✓ Elected Town Board Member Since 2024
              </div>
              <h1 className="text-6xl font-bold mb-4">Building a Stronger Pittsford Together</h1>
              <p className="text-2xl mb-2 font-semibold text-blue-100">Experience. Community. Results.</p>
              <p className="text-lg mb-8 text-blue-200">20+ years technology leadership • Community advocate</p>
              <div className="flex gap-4">
                <a href="https://secure.actblue.com/donate/friendsofnaveen" target="_blank" rel="noopener noreferrer" className="bg-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-700 flex items-center">
                  <Heart className="mr-2" size={20} />Support My Work
                </a>
                <a href="https://www.townofpittsford.org/electedofficials/contact" target="_blank" rel="noopener noreferrer" className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900">Get in Touch</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-4">
              <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
                {carouselImages.map((img, i) => (
                  <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, i) => (
                    <button key={i} onClick={() => setCurrentImageIndex(i)} className={`h-3 rounded-full transition-all ${i === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 w-3'}`} />
                  ))}
                </div>
              </div>
              <div className="mt-4 text-center text-gray-900">
                <p className="text-2xl font-bold">Naveen Havannavar</p>
                <p className="text-gray-600">Pittsford Town Board Member</p>
                <p className="text-gray-500 text-sm">Elected November 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-50 border-y-4 border-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div><div className="text-5xl font-bold text-blue-600">20+</div><div className="text-sm text-gray-700">Years Tech Leadership</div></div>
            <div><div className="text-5xl font-bold text-blue-600">40</div><div className="text-sm text-gray-700">Under 40 Award</div></div>
            <div><div className="text-5xl font-bold text-blue-600">2024</div><div className="text-sm text-gray-700">Elected to Board</div></div>
            <div><div className="text-5xl font-bold text-blue-600">100%</div><div className="text-sm text-gray-700">Community Focused</div></div>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section id="priorities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">My Priorities for Pittsford</h2>
          <p className="text-center text-gray-600 mb-12">Working every day to address the issues that matter most</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-l-8 border-blue-600">
              <div className="flex items-center mb-4"><div className="text-5xl mr-4">🏗️</div><h3 className="text-2xl font-bold">Infrastructure</h3></div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span>Address long-term infrastructure needs including sidewalk expansion and road maintenance</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span>Involve community groups in gathering input on infrastructure priorities</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-l-8 border-green-600">
              <div className="flex items-center mb-4"><div className="text-5xl mr-4">💼</div><h3 className="text-2xl font-bold">Economic Development</h3></div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span><span>Support local small businesses and entrepreneurs to expand the tax base</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">•</span><span>Attract new businesses by promoting town strengths</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border-l-8 border-red-600">
              <div className="flex items-center mb-4"><div className="text-5xl mr-4">🚔</div><h3 className="text-2xl font-bold">Public Safety</h3></div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-red-600 mr-2">•</span><span>Revise emergency management plans with latest tools like text alerts</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">•</span><span>Address traffic safety through enforcement and calming measures</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">•</span><span>Provide community education on safety topics</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl border-l-8 border-emerald-600">
              <div className="flex items-center mb-4"><div className="text-5xl mr-4">🌱</div><h3 className="text-2xl font-bold">Environmental Concerns</h3></div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-emerald-600 mr-2">•</span><span>Advocate for energy efficiency plans for public buildings</span></li>
                <li className="flex items-start"><span className="text-emerald-600 mr-2">•</span><span>Promote renewable energy through education on incentives</span></li>
                <li className="flex items-start"><span className="text-emerald-600 mr-2">•</span><span>Coordinate with stakeholders for inclusive plans</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Naveen</h2>
          <div className="bg-white p-8 rounded-xl border-l-4 border-blue-600 mb-12 max-w-4xl mx-auto">
            <p className="text-xl mb-4">I am honored to serve as a member of the Pittsford Town Board. As a long-time resident with my wife Kate and our two children, Neel and Leela, who attend Park Road Elementary, I am deeply invested in our community future.</p>
            <p className="text-xl">With over two decades of experience as a technology manager, I bring strong problem-solving skills to the challenges facing our town. Beyond my professional work, I am passionate about community engagement and committed to transparent, accountable governance.</p>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg italic font-medium">My family and community are at the center of my life, and I am committed to being a positive and productive member of both.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border-t-4 border-blue-600 shadow-lg">
              <Briefcase className="text-blue-600 mb-4" size={40} />
              <h3 className="text-lg font-bold mb-4">Professional Excellence</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>20+ years at Paychex and Xerox</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>BSc in Math, Physics, CS</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>MBA in Marketing and Systems</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>Leadership Rochester alumnus</span></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-purple-600 shadow-lg">
              <Users className="text-purple-600 mb-4" size={40} />
              <h3 className="text-lg font-bold mb-4">Community Leadership</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><span className="text-purple-600 mr-2">→</span><span>Outreach Liaison, India Community Center</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">→</span><span>Advisory Board, WXXI Little Theater</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">→</span><span>AAPI Heritage advocate</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">→</span><span>Actor and certified pilot</span></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-green-600 shadow-lg">
              <Award className="text-green-600 mb-4" size={40} />
              <h3 className="text-lg font-bold mb-4">Recognition</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><span className="text-green-600 mr-2">→</span><span>RBJ Forty Under 40 Winner</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">→</span><span>Elected Town Board 2023</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Town Work */}
      <section id="town-work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Town Board Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-6">Recent Accomplishments</h3>
              <ul className="space-y-4">
                <li className="flex items-start bg-white p-4 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-3 mt-1"><span className="text-xs font-bold">✓</span></div>
                  <div><p className="font-bold mb-1">Emergency Notification System</p><p className="text-sm text-gray-700">Promoted Monroe County Hyper-Reach system</p></div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-3 mt-1"><span className="text-xs font-bold">✓</span></div>
                  <div><p className="font-bold mb-1">AAPI Heritage Recognition</p><p className="text-sm text-gray-700">Championed AAPI Heritage Month recognition</p></div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-3 mt-1"><span className="text-xs font-bold">✓</span></div>
                  <div><p className="font-bold mb-1">Infrastructure Advocacy</p><p className="text-sm text-gray-700">Addressing potholes and road improvements</p></div>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-600">
              <h3 className="text-2xl font-bold mb-6">Town Board Meetings</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center mb-2"><Calendar className="text-green-600 mr-2" size={20} /><p className="font-bold">Meeting Schedule</p></div>
                  <p className="text-sm mb-1">1st and 3rd Tuesday, 6:00 PM</p>
                  <p className="text-sm text-gray-600">Town Hall Lower Level, 11 S. Main Street</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center mb-2"><Phone className="text-green-600 mr-2" size={20} /><p className="font-bold">Contact</p></div>
                  <p className="text-sm">Town Hall: (585) 248-6200</p>
                </div>
                <a href="https://www.townofpittsford.org/townboard" target="_blank" rel="noopener noreferrer" className="block bg-green-600 text-white p-4 rounded-lg text-center font-bold hover:bg-green-700">View Minutes & Agendas →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section id="updates" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Stay Connected</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center"><Facebook className="mr-3" size={40} /><div><h3 className="text-2xl font-bold">Facebook</h3><p className="text-blue-100">@NaveenForPittsford</p></div></div>
              </div>
              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Facebook className="mx-auto text-blue-600 mb-3" size={48} />
                    <p className="text-gray-600 mb-4">Live Facebook Feed</p>
                    <a href="https://www.facebook.com/NaveenForPittsford" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700">Visit Page</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white">
                <div className="flex items-center"><Instagram className="mr-3" size={40} /><div><h3 className="text-2xl font-bold">Instagram</h3><p className="text-pink-100">@NaveenForPittsford</p></div></div>
              </div>
              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Instagram className="mx-auto text-pink-600 mb-3" size={48} />
                    <p className="text-gray-600 mb-4">Live Instagram Feed</p>
                    <a href="https://www.instagram.com/naveenforpittsford" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold">Visit Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white text-gray-900 p-6 rounded-2xl text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Heart className="text-red-600" size={32} /></div>
              <h3 className="text-xl font-bold mb-3">Donate</h3>
              <p className="mb-6 text-gray-600 text-sm">Support community outreach</p>
              <a href="https://secure.actblue.com/donate/friendsofnaveen" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 block text-sm">DONATE NOW</a>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-2xl text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Mail className="text-blue-600" size={32} /></div>
              <h3 className="text-xl font-bold mb-3">Contact Me</h3>
              <p className="mb-6 text-gray-600 text-sm">Have a question?</p>
              <a href="https://www.townofpittsford.org/electedofficials/contact" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-700 block text-sm">GET IN TOUCH</a>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-2xl text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Calendar className="text-green-600" size={32} /></div>
              <h3 className="text-xl font-bold mb-3">Attend Meetings</h3>
              <p className="mb-6 text-gray-600 text-sm">1st & 3rd Tuesday 6PM</p>
              <a href="https://www.townofpittsford.org/government" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-full font-bold hover:bg-green-700 block text-sm">VIEW SCHEDULE</a>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-2xl text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Mail className="text-purple-600" size={32} /></div>
              <h3 className="text-xl font-bold mb-3">Newsletter</h3>
              <p className="mb-6 text-gray-600 text-sm">Get email updates</p>
              <button onClick={() => {
                const email = prompt('Enter your email address:');
                if (email) alert('Thank you for subscribing! (Connect to your email service)');
              }} className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold hover:bg-purple-700 block w-full text-sm">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white">About</button></li>
                <li><button onClick={() => scrollToSection('priorities')} className="hover:text-white">Priorities</button></li>
                <li><a href="https://www.townofpittsford.org/electedofficials/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.townofpittsford.org" target="_blank" rel="noopener noreferrer" className="hover:text-white">Town of Pittsford</a></li>
                <li><a href="https://www.townofpittsford.org/townboard" target="_blank" rel="noopener noreferrer" className="hover:text-white">Town Board</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/NaveenForPittsford" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Facebook size={28} /></a>
                <a href="https://www.instagram.com/naveenforpittsford" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><Instagram size={28} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>Paid for by Friends of Naveen Havannavar for Pittsford</p>
            <p>© 2025 Naveen Havannavar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
