import { ErrorWithStatus } from "../../error/error-with-status";
import { MemberCreated, MemberUpdated } from "./member";
import { Member } from "./member.model";

export const memberService = {
  readOne: async (id: number) => {
    const member = await Member.query().findById(id);

    if (!member) {
      throw new ErrorWithStatus(
        `Couldn't find any member with given id: ${id}`,
        404
      );
    }

    return { member };
  },
  readAll: async () => {
    const members = await Member.query();

    if (!members) {
      throw new ErrorWithStatus(`Couldn't find any members.`, 404);
    }

    return { members };
  },
  create: async (memberCreated: MemberCreated) => {
    await Member.query().insert(memberCreated);

    return {
      message: "member has been added.",
    };
  },
  update: async (id: number, memberUpdated: MemberUpdated) => {
    const member = await Member.query()
      .findById(id)
      .update(memberUpdated)
      .returning("*");

    if (!member) {
      throw new ErrorWithStatus(
        `Couldn't find any member with given id: ${id}`,
        404
      );
    }

    return {
      message: "member has been updated.",
    };
  },
  delete: async (id: number) => {
    const member = await Member.query().deleteById(id).returning("*");

    if (!member) {
      throw new ErrorWithStatus(
        `Couldn't find any member with given id: ${id}`,
        404
      );
    }
    return {
      message: "member has been deleted.",
    };
  },
};
