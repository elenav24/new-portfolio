import './Footer.css'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { RiInstagramFill, RiCopyrightLine } from "react-icons/ri";
import { LuGitCommitVertical } from "react-icons/lu";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="socials">
                <BsLinkedin className="icon linkedin" />
                <RiInstagramFill className="icon insta" />
                <BsGithub className="icon" />
            </div>
            <div className="copyright">
                <RiCopyrightLine className="symbol" />
                <p>2025 Elena Marquez</p>
            </div>
            <a className="source-code" href="https://github.com/elenav24/new-portfolio" target='_blank'>
                <LuGitCommitVertical className="commit" />
                <p>source code</p>
            </a>
        </div>
    )
}
