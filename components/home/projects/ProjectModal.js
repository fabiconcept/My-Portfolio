import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport, AiFillCrown, AiFillStar, AiFillTag } from "react-icons/ai";
import { MdClose, MdConstruction } from "react-icons/md";
import { projectType } from "./Projects";
import Image from "next/image";
import Head from "next/head";

export const ProjectModal = ({
  modalContent,
  projectLink,
  imgSrc,
  isOpen,
  title,
  description,
  code,
  onClose,
  tech,
  type,
  inProgress,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className={styles.modal} onClick={onClose}>
      <button className={styles.closeModalBtn} onClick={onClose}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        {inProgress && (
          <div title="Work in Progress" className={styles.projectWip}>
            <MdConstruction />
          </div>
        )}

        {!inProgress && type === projectType.professional && (
          <div title="Professional Project" className={styles.projectCrown}>
            <AiFillTag />
          </div>
        )}
        {!inProgress && type === projectType.personal && (
          <div title="Personal Project" className={styles.projectStar}>
            <AiFillCrown />
          </div>
        )}
        {!inProgress && type === projectType.openSource && (
          <div title="Open Source Project" className={styles.projectOpenSource}>
            <AiFillStar />
          </div>
        )}
        <Image
          className={styles.modalImage}
          src={imgSrc}
          alt={`An image of the ${title} project.`}
          width={1000}
          height={500}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              <Link target="_blank" rel="nofollow" href={code}>
                <AiFillGithub /> source code
              </Link>
              <Link target="_blank" rel="nofollow" href={projectLink}>
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return <>
    <Head>
      <title>Project - {title}</title>
      <meta name="description" content={description} />
    </Head>
    {ReactDOM.createPortal(content, document.getElementById("root"))}
  </>
};
