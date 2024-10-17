import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-4">
      <div className="container mx-auto text-center">
        <h3 className="text-lg mb-2">{t("developed_by")}</h3>
        <p className="text-sm mb-4">{t("all_rights_reserved")}</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
