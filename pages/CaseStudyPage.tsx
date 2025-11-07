import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { portfolioItems, slugify } from './PortfolioPage';
import AnimatedSection from '../components/AnimatedSection';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon';
import ShareIcon from '../components/icons/ShareIcon';
import CloseIcon from '../components/icons/CloseIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import ClipboardIcon from '../components/icons/ClipboardIcon';
import SpinnerIcon from '../components/icons/SpinnerIcon';
import LazyImage from '../components/LazyImage';

const CaseStudyPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = portfolioItems.find(item => slugify(item.title) === slug);

    const [isLoading, setIsLoading] = useState(true);
    const [mainImage, setMainImage] = useState(project?.imageUrl);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isResultsExpanded, setIsResultsExpanded] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

    useEffect(() => {
        setIsLoading(true);
        window.scrollTo(0, 0);

        // Simulate loading for better UX
        const timer = setTimeout(() => {
            if (project) {
                setMainImage(project.imageUrl);
            }
            setIsDescriptionExpanded(false);
            setIsResultsExpanded(false);
            setIsLoading(false);
        }, 500); // 0.5 second delay

        return () => clearTimeout(timer);
    }, [slug, project]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 2000);
        }, () => {
            setCopySuccess('Failed');
            setTimeout(() => setCopySuccess(''), 2000);
        });
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <SpinnerIcon />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center bg-brand-background dark:bg-dark-brand-background">
                <AnimatedSection>
                    <h1 className="text-4xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary">Project Not Found</h1>
                    <p className="mt-4 text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary">Sorry, we couldn't find the case study you're looking for.</p>
                    <div className="mt-8">
                        <NavLink to="/portfolio" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline text-lg">
                           <ArrowLeftIcon />
                           Back to Portfolio
                        </NavLink>
                    </div>
                </AnimatedSection>
            </div>
        );
    }
    
    const projectUrl = window.location.href;
    const shareText = encodeURIComponent(`Check out this project from ZTechie: ${project.title}`);

    const DESCRIPTION_THRESHOLD = 300;
    const isDescriptionLong = project.description.length > DESCRIPTION_THRESHOLD;
    const RESULTS_THRESHOLD = 150;
    const isResultsLong = project.results.length > RESULTS_THRESHOLD;

    const allImages = project.galleryImages && project.galleryImages.length > 0
        ? [project.imageUrl, ...project.galleryImages]
        : [project.imageUrl];

    const relatedProjects = portfolioItems
      .filter(
        (item) =>
          item.category === project.category && item.title !== project.title
      )
      .slice(0, 3);


    return (
        <div className="bg-brand-background dark:bg-dark-brand-background overflow-hidden animate-fade-in-scale">
            <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <NavLink to="/portfolio" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline mb-8 group">
                        <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Portfolio
                    </NavLink>
                </AnimatedSection>
                <AnimatedSection>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text-primary dark:text-dark-brand-text-primary">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-brand-text-secondary dark:text-dark-brand-text-secondary">
                        <span className="font-semibold text-brand-primary">{project.client}</span> / {project.category}
                    </p>
                </AnimatedSection>

                <AnimatedSection transitionDelay="delay-100">
                     <LazyImage
                        key={mainImage}
                        src={mainImage ?? ''}
                        alt={`Case study for ${project.title}`}
                        containerClassName="mt-12 w-full aspect-video rounded-lg shadow-2xl"
                        imageClassName="w-full h-full object-cover rounded-lg"
                    />
                </AnimatedSection>
                
                {project.galleryImages && project.galleryImages.length > 0 && (
                    <AnimatedSection transitionDelay="delay-200">
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary mb-4">Project Gallery</h2>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                {allImages.map((imgUrl, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setMainImage(imgUrl)}
                                        className={`rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-background dark:focus:ring-offset-dark-brand-background focus:ring-brand-primary ${mainImage === imgUrl ? 'ring-2 ring-brand-primary' : ''}`}
                                        aria-label={`View image ${index + 1}`}
                                    >
                                        <LazyImage
                                            src={imgUrl}
                                            alt={`Gallery image ${index + 1} for ${project.title}`}
                                            containerClassName="w-full h-24"
                                            imageClassName="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                )}


                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <AnimatedSection transitionDelay="delay-200">
                            <h2 className="text-3xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">About the Project</h2>
                            <p className={`mt-4 text-lg text-brand-text-secondary dark:text-dark-brand-text-secondary leading-relaxed ${isDescriptionLong && !isDescriptionExpanded ? 'line-clamp-4' : ''}`}>
                                {project.description}
                            </p>
                            {isDescriptionLong && (
                                <button onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)} className="text-sm font-semibold text-brand-primary hover:underline mt-2">
                                    {isDescriptionExpanded ? 'Show Less' : 'Read More'}
                                </button>
                            )}
                        </AnimatedSection>

                         <AnimatedSection transitionDelay="delay-300">
                            <h2 className="mt-12 text-3xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">Results & Impact</h2>
                            <p className={`mt-4 text-lg text-brand-text-secondary dark:text-dark-brand-text-secondary leading-relaxed ${isResultsLong && !isResultsExpanded ? 'line-clamp-4' : ''}`}>
                                {project.results}
                            </p>
                            {isResultsLong && (
                                <button onClick={() => setIsResultsExpanded(!isResultsExpanded)} className="text-sm font-semibold text-brand-primary hover:underline mt-2">
                                    {isResultsExpanded ? 'Show Less' : 'Read More'}
                                </button>
                            )}
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-1">
                        <AnimatedSection transitionDelay="delay-400">
                            <div className="bg-brand-white dark:bg-dark-brand-surface p-8 rounded-lg shadow-lg sticky top-24">
                                <h3 className="text-2xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">Project Details</h3>
                                <div className="mt-6 space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Client</h4>
                                        <p className="mt-1 text-lg text-brand-text-secondary dark:text-dark-brand-text-primary">{project.client}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Service</h4>
                                        <p className="mt-1 text-lg text-brand-text-secondary dark:text-dark-brand-text-primary">{project.category}</p>
                                    </div>
                                     <div>
                                        <h4 className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Technologies Used</h4>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 dark:text-brand-accent dark:bg-brand-accent/10 rounded-full">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-center text-white rounded-lg shadow-md bg-brand-primary hover:opacity-90 transition-all transform hover:scale-105"
                                        >
                                            View Live Demo
                                            <ExternalLinkIcon />
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setIsShareModalOpen(true)}
                                        className={`inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-center rounded-lg shadow-md transition-all transform hover:scale-105 ${
                                            project.demoUrl ? 'bg-brand-white dark:bg-dark-brand-surface border border-brand-primary text-brand-primary' : 'sm:col-span-2 bg-brand-primary text-white hover:opacity-90'
                                        }`}
                                    >
                                        <ShareIcon />
                                        Share Project
                                    </button>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                {relatedProjects.length > 0 && (
                    <AnimatedSection className="mt-24">
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
                            <h2 className="text-3xl font-bold text-center text-brand-text-primary dark:text-dark-brand-text-primary mb-12">
                                Related Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedProjects.map((relatedProject) => (
                                    <NavLink
                                        key={relatedProject.title}
                                        to={`/portfolio/${slugify(relatedProject.title)}`}
                                        className="group block bg-brand-white dark:bg-dark-brand-surface rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2"
                                    >
                                        <LazyImage
                                            src={relatedProject.imageUrl}
                                            alt={relatedProject.title}
                                            containerClassName="w-full h-48"
                                            imageClassName="w-full h-full object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary group-hover:text-brand-primary transition-colors">
                                                {relatedProject.title}
                                            </h3>
                                            <p className="mt-2 text-sm text-brand-text-secondary dark:text-dark-brand-text-secondary">
                                                {relatedProject.category}
                                            </p>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                )}
            </div>
             {isShareModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300" 
                    onClick={() => setIsShareModalOpen(false)}
                    aria-modal="true"
                    role="dialog"
                >
                    <div 
                        className="bg-brand-white dark:bg-dark-brand-surface rounded-lg shadow-2xl p-6 w-full max-w-md m-4 animate-fade-in-scale" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">Share Project</h3>
                            <button onClick={() => setIsShareModalOpen(false)} className="text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-text-primary" aria-label="Close share dialog">
                                <CloseIcon />
                            </button>
                        </div>
                        <p className="text-brand-text-secondary dark:text-dark-brand-text-secondary mb-6">Share this case study with your network.</p>
                        <div className="flex justify-center space-x-4 mb-6">
                             <a href={`https://twitter.com/intent/tweet?url=${projectUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-brand-text-secondary dark:text-dark-brand-text-secondary hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-[#1DA1F2] transition-colors"><TwitterIcon /></a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${projectUrl}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-brand-text-secondary dark:text-dark-brand-text-secondary hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-[#0A66C2] transition-colors"><LinkedInIcon /></a>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${projectUrl}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-brand-text-secondary dark:text-dark-brand-text-secondary hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-[#1877F2] transition-colors"><FacebookIcon /></a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="text" value={projectUrl} readOnly className="flex-grow bg-brand-background dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-brand-text-secondary dark:text-dark-brand-text-secondary focus:outline-none" />
                            <button onClick={copyToClipboard} className="px-4 py-2 bg-brand-primary text-white font-semibold rounded-md hover:opacity-90 transition-colors flex items-center gap-2">
                                {copySuccess ? copySuccess : <><ClipboardIcon /> Copy</>}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaseStudyPage;