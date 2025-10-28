import React, { useState, FormEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: 'Web Development',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          service: 'Web Development',
          budget: '',
          message: '',
        });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };


  return (
    <div className="py-16 sm:py-24 bg-brand-background dark:bg-dark-brand-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
            <div className="text-center">
            <h1 className="text-4xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary sm:text-5xl">Let’s Work Together 🚀</h1>
            <p className="mt-4 text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary">
                We’re here to support your business with the right technology.
            </p>
            </div>
        </AnimatedSection>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-8">
                <div>
                <h3 className="text-xl font-bold text-brand-primary">📞 WhatsApp / Call</h3>
                <a href="tel:+923222040775" className="mt-2 text-lg text-brand-text-primary dark:text-dark-brand-text-primary hover:underline">+92 3222040775</a>
                </div>
                <div>
                <h3 className="text-xl font-bold text-brand-primary">📧 Email</h3>
                <a href="mailto:info@ztechie.com" className="mt-2 text-lg text-brand-text-primary dark:text-dark-brand-text-primary hover:underline">info@ztechie.com</a>
                </div>
                <div>
                <h3 className="text-xl font-bold text-brand-primary">📍 Location</h3>
                <p className="mt-2 text-lg text-brand-text-primary dark:text-dark-brand-text-primary">Pakistan & Oman</p>
                </div>
                <p className="text-brand-text-secondary dark:text-dark-brand-text-secondary pt-4">➤ Send us a message — we’ll reply within minutes!</p>
            </div>
          </AnimatedSection>

          <AnimatedSection transitionDelay="delay-200">
            {isSuccess ? (
              <div className="bg-brand-white dark:bg-dark-brand-surface p-8 rounded-lg shadow-lg text-center h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold text-green-500">Message Sent!</h3>
                <p className="mt-4 text-brand-text-secondary dark:text-dark-brand-text-secondary">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="bg-brand-white dark:bg-dark-brand-surface p-8 rounded-lg shadow-lg space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text-secondary dark:text-dark-brand-text-secondary">Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={`mt-1 block w-full bg-brand-background dark:bg-gray-700 border rounded-md py-2 px-3 text-brand-text-primary dark:text-dark-brand-text-primary focus:outline-none transition-all duration-200 ${errors.name ? 'border-red-500 focus:ring-4 focus:ring-red-500/30' : 'border-gray-300 dark:border-gray-600 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/30'}`} />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary dark:text-dark-brand-text-secondary">Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={`mt-1 block w-full bg-brand-background dark:bg-gray-700 border rounded-md py-2 px-3 text-brand-text-primary dark:text-dark-brand-text-primary focus:outline-none transition-all duration-200 ${errors.email ? 'border-red-500 focus:ring-4 focus:ring-red-500/30' : 'border-gray-300 dark:border-gray-600 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/30'}`} />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-brand-text-secondary dark:text-dark-brand-text-secondary">WhatsApp</label>
                    <input type="tel" name="whatsapp" id="whatsapp" value={formData.whatsapp} onChange={handleChange} className="mt-1 block w-full bg-brand-background dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-brand-text-primary dark:text-dark-brand-text-primary focus:outline-none transition-all duration-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/30" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-text-secondary dark:text-dark-brand-text-secondary">Service Needed</label>
                    <select id="service" name="service" required value={formData.service} onChange={handleChange} className="mt-1 block w-full bg-brand-background dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-brand-text-primary dark:text-dark-brand-text-primary focus:outline-none transition-all duration-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/30">
                        <option>Web Development</option>
                        <option>Hosting & Cloud</option>
                        <option>AI & Automation</option>
                        <option>IT Support</option>
                        <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-brand-text-secondary dark:text-dark-brand-text-secondary">Budget (Optional)</label>
                    <input type="text" name="budget" id="budget" value={formData.budget} onChange={handleChange} className="mt-1 block w-full bg-brand-background dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-brand-text-primary dark:text-dark-brand-text-primary focus:outline-none transition-all duration-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/30" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text-secondary dark:text-dark-brand-text-secondary">Message</label>
                    <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className={`mt-1 block w-full bg-brand-background dark:bg-gray-700 border rounded-md py-2 px-3 text-brand-text-primary dark:text-dark-brand-text-primary focus:outline-none transition-all duration-200 ${errors.message ? 'border-red-500 focus:ring-4 focus:ring-red-500/30' : 'border-gray-300 dark:border-gray-600 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/30'}`}></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  <div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                          <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                          </>
                      ) : 'Send Message'}
                    </button>
                  </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;