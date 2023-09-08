import { NextFunction } from "express";
import { ErrorWithStatus } from "../../error/error-with-status";
import { CategoryCreated, CategoryUpdated } from "./category";
import { Category } from "./category.model";

export const categoryService = {
  readOne: async (id: number) => {
    const category = await Category.query().findById(id);

    if (!category) {
      throw new ErrorWithStatus(
        `Couldn't find category with given id: ${id}`,
        404
      );
    }

    return { category };
  },
  readAll: async () => {
    const categorys = await Category.query();

    if (!categorys) {
      throw new ErrorWithStatus(`Couldn't find any category.`, 404);
    }

    return { categorys };
  },
  create: async (categoryCreated: CategoryCreated) => {
    await Category.query().insert(categoryCreated);

    return {
      message: "category has been added.",
    };
  },
  update: async (id: number, categoryUpdated: CategoryUpdated) => {
    const category = await Category.query()
      .findById(id)
      .update(categoryUpdated)
      .returning("*");

    if (!category) {
      throw new ErrorWithStatus(
        `Couldn't find category with given id: ${id}`,
        404
      );
    }

    return {
      message: "category has been updated.",
    };
  },
  delete: async (id: number) => {
    const category = await Category.query().deleteById(id).returning("*");

    if (!category) {
      throw new ErrorWithStatus(
        `Couldn't find category with given id: ${id}`,
        404
      );
    }

    return {
      message: "category has been deleted.",
    };
  },
};
