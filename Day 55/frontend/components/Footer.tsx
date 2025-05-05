import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-center py-6 bg-white border-t border-gray-200 text-sm text-gray-500"
    >
      &copy; {new Date().getFullYear()} AgriFund DApp — Empowering Agriculture with Blockchain 🌿
    </motion.footer>
  );
}
