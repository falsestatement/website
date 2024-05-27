    import CIcon from "@icon/_tech/CIcon";
    import CSharpIcon from "@icon/_tech/CSharpIcon";
    import CPlusPlusIcon from "@icon/_tech/CPlusPlusIcon";
    import JavaIcon from "@icon/_tech/JavaIcon";
    import PythonIcon from "@icon/_tech/PythonIcon";
    import JavaScriptIcon from "@icon/_tech/JavaScriptIcon";
    import TypeScriptIcon from "@icon/_tech/TypeScriptIcon";
    import SystemVerilogIcon from "@icon/_tech/SystemVerilogIcon";
    import AssemblyIcon from "@icon/_tech/AssemblyIcon";
    import GolangIcon from "@icon/_tech/GolangIcon";
    import HTMLIcon from "@icon/_tech/HTMLIcon";
    import CSSIcon from "@icon/_tech/CSSIcon";
    import ReactJSIcon from "@icon/_tech/ReactJSIcon";
    import NextJSIcon from "@icon/_tech/NextJSIcon";
    import SocketioIcon from "@icon/_tech/SocketioIcon";
    import AWSIcon from "@icon/_tech/AWSIcon";
    import JenkinsIcon from "@icon/_tech/JenkinsIcon";
    import GithubActionsIcon from "@icon/_tech/GithubActionsIcon";
    import VagrantIcon from "@icon/_tech/VagrantIcon";
    import DockerIcon from "@icon/_tech/DockerIcon";
    import TerraformIcon from "@icon/_tech/TerraformIcon";
    import MySQLIcon from "@icon/_tech/MySQLIcon";
    import PostgreSQLIcon from "@icon/_tech/PostgreSQLIcon";
    import SynopsisIcon from "@icon/_tech/SynopsisIcon";

const techIcons: {[key: string]: React.ComponentType} = {
    c: CIcon,
    csharp: CSharpIcon,
    cplusplus: CPlusPlusIcon,
    java: JavaIcon,
    python: PythonIcon,
    javascript: JavaScriptIcon,
    typescript: TypeScriptIcon,
    systemverilog: SystemVerilogIcon,
    assembly: AssemblyIcon,
    golang: GolangIcon,
    html: HTMLIcon,
    css: CSSIcon,
    reactjs: ReactJSIcon,
    nextjs: NextJSIcon,
    socketio: SocketioIcon,
    aws: AWSIcon,
    jenkins: JenkinsIcon,
    githubactions: GithubActionsIcon,
    vagrant: VagrantIcon,
    docker: DockerIcon,
    terraform: TerraformIcon,
    mysql: MySQLIcon,
    postgresql: PostgreSQLIcon,
    synopsis: SynopsisIcon,
};

const TechSkillIcon = ({ variant }: { variant: string }) => {
    const TechVariantIcon = techIcons[variant];

    return TechVariantIcon ? <TechVariantIcon /> : <div>ya dun goof</div>;
};

export default TechSkillIcon;
