"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Badge,
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { AppointmentButton } from "@/components/shared";
import { formatName } from "@/lib/utils";
import type { Branch, Expert } from "@/types/strapi-types";

interface TeamMembersSectionProps {
  branchList: Branch[];
  teamMembers: Expert[];
}

export default function TeamMembersSection({
  branchList,
  teamMembers,
}: TeamMembersSectionProps) {
  const [activeBranch, setActiveBranch] = useState("tum-ekip");
  const filteredMembers =
    activeBranch === "tum-ekip"
      ? teamMembers
      : teamMembers.filter((member) => member.branch?.slug === activeBranch);

  return (
    <section className="container py-16 md:py-24">
      <Tabs
        defaultValue={activeBranch}
        className="w-full"
        onValueChange={(value) => setActiveBranch(value)}
      >
        <TabsList
          className="mx-auto mb-8 flex h-fit flex-wrap justify-center"
          defaultValue={"tum-ekip"}
        >
          <TabsTrigger value="tum-ekip" aria-label="Tüm Ekip">
            Tüm Uzmanlar
          </TabsTrigger>
          {branchList.map((branch) => (
            <TabsTrigger
              key={branch.id}
              value={branch.slug}
              aria-label={branch.name}
            >
              {branch.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="tum-ekip" className="mt-0">
          <div className="grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-12">
            {filteredMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </TabsContent>

        {branchList.map((branch) => (
          <TabsContent key={branch.id} value={branch.slug} className="mt-0">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {filteredMembers
                .filter((member) => member.branch?.slug === branch.slug)
                .map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function TeamMemberCard({ member }: { member: Expert }) {
  return (
    <Card className="bg-card flex flex-col gap-0 overflow-hidden border py-0">
      <div className="relative aspect-square h-80 w-auto overflow-hidden 2xl:h-120">
        <Image
          src={member.image.url || "/placeholder.svg"}
          alt={formatName(member.name)}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-grow flex-col gap-2 p-4">
        <div>
          <h4>
            {member.expertTitle} {formatName(member.name)}
          </h4>
          <p className="text-primary">{member.branch?.name}</p>
        </div>
        {member.specialities && member.specialities.length > 0 ? (
          <div className="space-y-1">
            <p className="text-sm font-medium">Uzmanlık Alanları:</p>
            <div className="flex flex-wrap gap-1.5">
              {member.specialities.map((specialty, index) => (
                <Badge key={index}>{specialty.name}</Badge>
              ))}
            </div>
          </div>
        ) : null}

        <p className="text-muted-foreground my-2 flex-grow overflow-hidden text-justify text-sm">
          {member.bio}
        </p>

        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MailIcon className="text-primary h-4 w-4" />
            <span className="text-muted-foreground">{member.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <PhoneIcon className="text-primary h-4 w-4" />
            <span className="text-muted-foreground">{member.phone}</span>
          </div>
        </div>

        <div className="mt-4 border-t pt-4">
          <AppointmentButton className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
