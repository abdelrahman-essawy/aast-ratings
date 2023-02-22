import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog"
import { FormTemplete } from "./FormTemplete"


export const ReviewModal = ({ name, id }: { name: string, id: string }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="btn btn-block my-2 mp-auto bg-[#191d24]">review</div>
            </DialogTrigger>

            <DialogContent className="!bg-base-300">
                <DialogHeader>

                    <DialogTitle className='!mb-4'>Review {name}</DialogTitle>
                   
                    <DialogDescription>

                        <FormTemplete id={id} />

                    </DialogDescription>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
