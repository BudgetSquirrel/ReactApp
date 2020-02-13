import { createContext } from "react";
import BudgetService from "../services/budget-service";
import BackendClient from "../infrastructure/backend-client";

const backendClient = new BackendClient();
const budgetService = new BudgetService(backendClient);

interface BudgetSquirrelServices {
    backendClient: BackendClient;
    budgetService: BudgetService;
}

const services: BudgetSquirrelServices = {
    backendClient,
    budgetService
};

export const ServiceContext = createContext(services);