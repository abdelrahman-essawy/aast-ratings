import React, { memo } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog"
import FormTemplete from "./FormTemplete"


export const ReviewModal = memo(({ name, id, mutate, lecturer, course }: { name: string, id: string, mutate?: any, lecturer?: any, course?: any, setOptimisticData?: any }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="btn btn-block my-2 mp-auto bg-[#191d24]">review</div>
            </DialogTrigger>

            <DialogContent className="!bg-base-300">
                <DialogHeader>

                    <DialogTitle className='!mb-4'>Review {name}</DialogTitle>

                    <DialogDescription>

                        <FormTemplete id={id} mutate={mutate} lecturer={lecturer} course={course} />

                    </DialogDescription>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
})
ReviewModal.displayName = 'ReviewModal'
