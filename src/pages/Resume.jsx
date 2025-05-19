import React, { useState } from "react";
import { FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDownloadClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500); // hide after 2.5s
    // Download will start automatically due to <a> with download attribute
  };

  return (
    <section
      id="resume"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-4"></h2>
          <p className="text-gray-600 text-lg mb-10">
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {/* Download Card */}
            <motion.a
              href="/AQUEEL ISHAK.pdf"
              download
              onClick={handleDownloadClick}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="relative bg-white/30 backdrop-blur-lg border border-indigo-100 shadow-xl rounded-2xl p-8 max-w-md mx-auto transition-all hover:shadow-indigo-300 cursor-pointer group">
                <div className="flex flex-col items-center justify-center">
                  <FileText className="text-indigo-600 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2 group-hover:underline">
                    Download Resume
                  </h3>
                  <p className="text-sm text-gray-600">
                    PDF Format &bull; Updated May 2025
                  </p>
                </div>
              </div>
            </motion.a>

            {/* View Online Card */}
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block focus:outline-none"
            >
              <div className="relative bg-white/30 backdrop-blur-lg border border-indigo-100 shadow-xl rounded-2xl p-8 max-w-md mx-auto transition-all hover:shadow-indigo-300 cursor-pointer group">
                <div className="flex flex-col items-center justify-center">
                  <FileText className="text-indigo-600 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2 group-hover:underline">
                    View Resume Online
                  </h3>
                  <p className="text-sm text-gray-600">
                    Preview PDF without downloading
                  </p>
                </div>
              </div>
            </motion.button>
          </div>

          {/* Toast */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-indigo-600 text-white py-3 px-6 rounded shadow-lg z-50"
              >
                Downloading Resume...
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
                onClick={() => setShowModal(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-white rounded-lg overflow-hidden max-w-4xl w-full shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                >
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-indigo-600 transition"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                  <iframe
                    src="/AQUEEL ISHAK.pdf"
                    title="Resume Preview"
                    className="w-full h-[600px] md:h-[800px] border-0"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
