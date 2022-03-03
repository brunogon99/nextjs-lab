import { useRouter } from "next/router";

export default function comAutorizacao(Componente){
    const estaLogado = false;
    
    return (porps) => {
        if(typeof window === 'undefined'){
            return null;
        }

        const router = useRouter();
        if(estaLogado){
            <Componente {...props} />
        }

        router.push('/login');
        return null;
    }
}