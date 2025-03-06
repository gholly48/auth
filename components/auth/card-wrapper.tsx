'use client'

import { Social } from "@/components/auth/social";
import { Header } from "@/components/auth/header"
import { BackButton } from "@/components/auth/back-button";
import { 
    Card,
    CardContent,
    CardHeader,
    CardFooter
 } from "@/components/ui/card";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLable: string;
    backButtonLable: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerLable,
    backButtonLable,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header lable={headerLable} />
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                lable={backButtonLable}
                href={backButtonHref}
            />
            </CardFooter>
        </Card>
    );
}