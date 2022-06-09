import React, { useState } from "react";
import Head from "next/head";
import { ModuleCard } from "../../components/ModuleCard";
import { CreateItemModal } from "@components/CreateItemModal";

export default function Modules(): JSX.Element {
  const TITLE = "Modules";
  const [showCreateItem, setShowCreateItem] = useState<string|null>(null);
  return (
    <>
      <Head>
        <title>Studio Ghibli Backoffice - Administrator</title>
      </Head>
      {/* <Header></Header> */}
      <h1 className="p-2 mx-8 mt-5 text-3xl font-semibold text-gray-900 border-l-4 border-blue-500 sm:text-left sm:ml-32">
        {TITLE}
      </h1>
      <section className="flex flex-col items-center justify-center my-8">
        <ModuleCard
          title={"Users"}
          description={"Find , create, edit or delete users"}
          icons={"users-icon"}
          goToSearchPage={"/#"}
          itemToCreate={"user"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Movies"}
          description={"Release a new movie, edit, or delete it"}
          icons={"movies-icon"}
          goToSearchPage={"/#"}
          itemToCreate={"movie"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Writers"}
          description={"Add or edit a writer"}
          icons={"writers-icon"}
          goToSearchPage={"/#"}
          itemToCreate={"writer"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Directors"}
          description={"Add or edit a director"}
          icons={"directors-icon"}
          goToSearchPage={"/#"}
          itemToCreate={"director"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Musicians"}
          description={"Add or edit a musician"}
          icons="musicians-icon"
          goToSearchPage={"/#"}
          itemToCreate={"musician"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Roles"}
          description={"Assign new roles"}
          icons="roles-icon"
          goToSearchPage={"/#"}
          itemToCreate={"role"}
          setShowCreateItem={setShowCreateItem}
        />
      </section>
      {showCreateItem !== null 
        && <CreateItemModal item={showCreateItem} setShowCreateItem={setShowCreateItem}/>
      }
      {/* <SessionUser/> */}
    </>
  );
}
